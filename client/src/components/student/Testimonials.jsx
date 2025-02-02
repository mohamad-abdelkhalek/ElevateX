import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="px-8 md:px-20 lg:px-32 pb-14">
      <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3">
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br /> platform has made a difference in their
        lives.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:mt-16 mt-10 gap-6">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-300 pb-6 rounded-lg bg-white shadow-md overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-100">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <img
                    className="h-5"
                    key={i}
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="Star"
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
            </div>
            <button
              className="text-blue-500 underline px-5"
              aria-label={`Read more about ${testimonial.name}'s testimonial`}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
