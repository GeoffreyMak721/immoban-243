export default {
  name: "testimonial",
  type: "document",
  title: "Temoignages",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nom",
    },
    {
      title: "Rôle",
      name: "role",
      type: "string",
    },
    {
      name: "testimonial",
      title: "Témoignage",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "testimonial",
      media: "image",
    },
  },
};
