import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    alert("Message sent successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-3  min-h-screen">
      {/* Contact Form */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full mt-1"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="input input-bordered w-full mt-1"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="textarea textarea-bordered w-full mt-1"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-2">
          📧 Email: <a href="mailto:info@example.com" className="text-primary">info@example.com</a>
        </p>
        <p className="text-gray-700 mb-2">📞 Phone: +123 456 7890</p>
        <p className="text-gray-700">📍 Address: 123 Street, City, Country</p>
      </div>
    </div>
  );
};

export default ContactUs;
