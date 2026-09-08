import { testimonialsData } from '../data/portfolioData';

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Testimonials
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <blockquote className="mt-4 text-sm text-gray-600 italic">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-bold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
