import {
    FaYoutube,
    FaInstagram,
    FaTiktok,
    FaLinkedin,
    FaTwitter,
    FaCode,
    FaCss3Alt,
    FaSearch,
    FaWeebly
  } from "react-icons/fa";
  
  export const contentTemplates = [
    {
      name: "Youtube Video Description",
      desc: "An AI tool that generate youtube video description from your information",
      category: "Youtube",
      icon: FaYoutube,
      aiPrompt:
        "Give me youtube video description Ideas based on given video description outline and title and give me result in Rich Text Editor format",
      slug: "youtube-description",
      form: [
        {
          label: "Youtube Video Description Title",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter Video Description Outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Youtube Video Idea",
      desc: "An AI tool that generate Youtube Video Idea based on given information",
      category: "Youtube",
      icon: FaYoutube,
      aiPrompt:
        "Give me youtube video idea on given video niche & outline topic and give me result in Rich Text Editor format",
      slug: "generate-youtube-video-idea",
      form: [
        {
          label: "Enter your video niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter video outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Component Code Generator",
      desc: "An AI tool that generates React component code based on your description",
      category: "Frontend",
      icon: FaCode,
      aiPrompt: 
        "Create a React component for given component-description. Use Tailwind CSS for styling. No MDX format , comment out anyother text beside code. NO use of backticks .. act like a IDE like VS COde",
      slug: "component-code-generator",
      form: [
        {
          label: "Component Description",
          field: "textarea",
          name: "description",
          required: true,
        },
      ],
    },
    {
      name: "CSS Helper",
      desc: "An AI tool that provides CSS suggestions or complete snippets based on your description",
      category: "Frontend",
      icon: FaCss3Alt,
      aiPrompt: 
        "Provide CSS suggestions or complete snippets based on the following description.",
      slug: "css-helper",
      form: [
        {
          label: "CSS Description",
          field: "textarea",
          name: "description",
          required: true,
        },
      ],
    },
    {
      name: "SEO Metadata Generator",
      desc: "An AI tool that generates SEO-friendly metadata for webpages",
      category: "SEO",
      icon: FaSearch,
      aiPrompt: 
        "Generate SEO-friendly metadata (title, description, keywords) based on the following page description.",
      slug: "seo-metadata-generator",
      form: [
        {
          label: "Page Description",
          field: "textarea",
          name: "description",
          required: true,
        },
      ],
    },
    {
      name: "Website Content Generator",
      desc: "An AI tool that generates content for various sections of a website based on your inputs.",
      category: "Website",
      icon: FaWeebly,
      aiPrompt:
        "Generate content for the specified website section based on the provided details. The result should be formatted in a Rich Text Editor format.",
      slug: "website-content",
      form: [
        {
          label: "Select Website Section",
          field: "input",
          name: "title",
          options: [
            { value: "hero", label: "Hero Section" },
            { value: "about", label: "About Section" },
            { value: "services", label: "Services Section" },
            { value: "contact", label: "Contact Section" },
            // Add more sections as needed
          ],
          required: true,
        },
        {
          label: "Enter Section Details",
          field: "textarea",
          name: "description",
          required: true,
          placeholder: "Provide details or keywords related to the section you want to generate content for.",
        },
      ],
    },
    {
      name: "Instagram Hashtags",
      desc: "An AI tool that generate Instagram hashtags based on your post niche and outline information",
      category: "Instagram",
      icon: FaInstagram,
      aiPrompt:
        "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format",
      slug: "generate-instagram-hashtags",
      form: [
        {
          label: "Enter your post niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter post outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Tiktok Hashtags",
      desc: "An AI tool that generate Tiktok topic idea based on your post niche and outline information",
      category: "Tiktok",
      icon: FaTiktok,
      aiPrompt:
        "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format",
      slug: "generate-tiktok-hashtags",
      form: [
        {
          label: "Enter your post niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter post outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Linkedin Post",
      desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
      category: "Linkedin",
      icon: FaLinkedin,
      aiPrompt:
        "Give me some good examples of Linkedin Post idea on given niche & outline topic and give me result in Rich Text Editor format",
      slug: "generate-likedin-post",
      form: [
        {
          label: "Enter your post niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter post outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Tweet",
      desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
      category: "Tweet",
      icon: FaTwitter,
      aiPrompt:
        "Give me 280 characters of tweet example on given niche & outline topic",
      slug: "generate-tweet-post",
      form: [
        {
          label: "Enter your tweet niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter tweet outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
  ];