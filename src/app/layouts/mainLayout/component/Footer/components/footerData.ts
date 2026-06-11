import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { INSTRAGRAM_LINK } from '../../../../../config/utils/variables';
// import { FooterProps } from '../components/footer/types';

export const footerData = {
  companyInfo: {
    name: "Vd Propertiess",
    tagline: "",
    crisisNumber: "888-888-88",
    socialLinks: [
      // {
      //   name: "LinkedIn",
      //   url: "https://linkedin.com",
      //   icon: FaLinkedinIn
      // },
      // {
      //   name: "Twitter",
      //   url: "https://twitter.com",
      //   icon: FaTwitter
      // },
      {
        name: "Instagram",
        url: INSTRAGRAM_LINK,
        icon: FaInstagram
      },
      {
        name: "Whatsapp",
        url: "https://wa.me/919958805754",
        icon: FaWhatsapp
      },
      // {
      //   name: "Pintrest",
      //   url: "https://instagram.com",
      //   icon: FaPinterestP
      // },
    ]
  },
  contactInfo: {
    phone: "+91 - 9958 805 754",
    email: "VD Properties.",
    address: "VD Properties."
  },
  sections: [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },       
        { name: "Blogs", href: "/blogs" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact Us", href: "/contact-us" }
      ]
    },
   
  ],
  legalLinks: [

  ]
};
