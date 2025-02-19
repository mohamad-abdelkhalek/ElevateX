import { Webhook } from "svix";
import User from "../models/User.js";

// API Controller function to manage Clerk User with database
const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify the webhook signature
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_address[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };

        await User.create(userData);
        console.log(`User created: ${data.id}`);
        return res.status(200).json({ success: true });
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };

        await User.findByIdAndUpdate(data.id, userData);
        console.log(`User updated: ${data.id}`);
        return res.status(200).json({ success: true });
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log(`User deleted: ${data.id}`);
        return res.status(200).json({ success: true });
      }

      default:
        console.warn(`Unhandled event type: ${type}`);
        return res
          .status(400)
          .json({ success: false, message: "Unhandled event type" });
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { clerkWebhooks };
