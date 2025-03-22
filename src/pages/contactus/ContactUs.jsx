import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_9908vav", // Replace with your EmailJS service ID
        "template_xdj1ylx", // Replace with your EmailJS template ID
        data,
        "rB0X5Rl-ljhGJ9eOV" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          toast.success("Meddelandet har skickats framgångsrikt!");
          reset();
        },
        (error) => {
          toast.error("Ett fel uppstod. Försök igen senare.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-3 min-h-screen">
      {/* Contact Form */}
      <div className="w-full md:w-2/3 card-color p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 ch mb-4">Kontakta oss</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block">Namn</label>
            <input
              type="text"
              {...register("name", { required: "Namn är obligatoriskt" })}
              className="input input-bordered w-full mt-1"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block">E-post</label>
            <input
              type="email"
              {...register("email", {
                required: "E-post är obligatoriskt",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ogiltig e-postadress",
                },
              })}
              className="input input-bordered w-full mt-1"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block">Meddelande</label>
            <textarea
              {...register("message", { required: "Meddelande är obligatoriskt" })}
              className="textarea textarea-bordered w-full mt-1"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-full">Skicka meddelande</button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/3 card-color p-6 rounded-lg shadow-md flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-blue-600 ch mb-4">Kom i kontakt</h2>
        <p className="mb-2">
          📧 E-post: <a href="mailto:piercingsodermalm@gmail.com" className="text-blue-600 ch">piercingsodermalm@gmail.com</a>
        </p>
        <p className="mb-2">📞 Telefon: <a href="tel:08-6415057">08-6415057</a></p>
        <p className="">📍 Adress: Piercing Södermalm, Åsögatan 128, 11624 Stockholm, Sverige</p>
      </div>
    </div>
  );
};

export default ContactUs;
