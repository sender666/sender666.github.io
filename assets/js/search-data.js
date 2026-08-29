// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Conference and journal papers",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Moments from campus life",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-one-paper-was-accepted-by-the-miccai-2024-care-challenge",
          title: 'One paper was accepted by the MICCAI 2024 CARE challenge.',
          description: "",
          section: "News",},{id: "news-papers-were-accepted-by-ijcai-icic-and-ijcnn",
          title: 'Papers were accepted by IJCAI, ICIC, and IJCNN.',
          description: "",
          section: "News",},{id: "news-two-papers-were-accepted-by-miccai-2025",
          title: 'Two papers were accepted by MICCAI 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-neurips-2025",
          title: 'One paper was accepted by NeurIPS 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-neural-networks-2026",
          title: 'One paper was accepted by Neural Networks 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-ieee-transactions-on-computational-social-systems-2026",
          title: 'One paper was accepted by IEEE Transactions on Computational Social Systems 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-cvpr-2026-and-selected-as-oral-presentation-and-award-candidate",
          title: 'One paper was accepted by CVPR 2026 and selected as oral presentation and...',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-expert-systems-with-applications",
          title: 'One paper was accepted by Expert Systems with Applications.',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-bmvc-2026-congratulations-to-hexiang",
          title: 'One paper was accepted by BMVC 2026, congratulations to Hexiang.',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sender666", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JS0x3IsAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
