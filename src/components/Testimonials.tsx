import { TestimonialsData } from "@/stores/Testimonials";
import React, { Fragment } from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className='relative z-0 w-full mt-16 md:mt-20'>
      <div className='py-12 space-y-12'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='text-2xl md:text-3xl'>Satisfied Customers</div>
            <p className='px-4 text-neutral-200/80 text-xs/relaxed md:text-base/relaxed lg:text-xl/relaxed'>
              Don't just take my word for it, see what my customers have to say
              about me.
            </p>
          </div>
        </div>
        <div className='container flex mt-12 lg:mt-20 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4'>
          <div className='flex items-center justify-center flex-none gap-8 animate-move-left [animation-duration:100s]'>
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {TestimonialsData.map((testimonial, i) => (
                    <div
                      key={i}
                      className='z-0 max-w-xs p-6 transition duration-300 border shadow-sm h-72 bg-neutral-900 rounded-3xl border-neutral-800/50 shadow-neutral-800/50'
                    >
                      <div className='flex items-center gap-4'>
                        <div className='inline-flex items-center justify-center flex-shrink-0 rounded-full size-14 bg-neutral-800'>
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className='max-h-full'
                          />
                        </div>
                        <div>
                          <div className='font-semibold'>
                            {testimonial.name}
                          </div>
                          <div className='text-sm text-neutral-200/80'>
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className='mt-4 test-sm'>{testimonial.text}</p>
                    </div>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
