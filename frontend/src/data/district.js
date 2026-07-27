const districts = [
  {
    id: 1,
    name: "Sehore",
    image: "/images/sehore.jpg",
    description:
      "Sehore is a peaceful and naturally beautiful district located near Bhopal in Madhya Pradesh. Known for its green surroundings, rivers, temples, and agricultural landscapes, Sehore offers a calm environment away from crowded cities. The district has cultural importance and is famous for local fairs, traditional festivals, and historical temples visited by devotees throughout the year. Nature lovers enjoy the scenic countryside, lakes, and nearby picnic spots. Sehore is also well connected by road and railway, making it convenient for tourists traveling from Bhopal and nearby cities to explore its spiritual and natural attractions.",

    transport: {
      airport: "Nearest Airport: Raja Bhoj International Airport, Bhopal",
      railway: "Sehore Railway Station",
      road:
        "Connected via NH-46 and major roads from Bhopal and Indore.",
      local:
        "Auto-rickshaws, buses and taxis available for local travel."
    }
  },

  {
    id: 2,
    name: "Narmadapuram",
    image: "/images/narmadapuram.jpg",
    description:
      "Narmadapuram, formerly known as Hoshangabad, is one of the most scenic districts of Madhya Pradesh located on the banks of the sacred Narmada River. The district is famous for beautiful river ghats, peaceful sunset views, temples, and natural landscapes. Tourists visit Narmadapuram for its calm riverside atmosphere and nearby attractions like Tawa Dam, Pachmarhi hills, and Satpura forests. The district also hosts traditional religious celebrations during Narmada Jayanti and other festivals. Rich in natural beauty and spiritual significance, Narmadapuram provides a perfect combination of culture, relaxation, and eco-tourism experiences for visitors.",

    transport: {
      airport: "Nearest Airport: Raja Bhoj International Airport, Bhopal",
      railway: "Narmadapuram Railway Station",
      road:
        "Connected through NH-46 and major state highways.",
      local:
        "Autos, buses and taxis easily available."
    }
  },

  {
    id: 3,
    name: "Ujjain",
    image: "/images/ujjain.jpg",
    description:
      "Ujjain is one of the holiest and oldest cities in India, famous for the Mahakaleshwar Jyotirlinga temple and the sacred Kshipra River. This spiritual district attracts millions of pilgrims and tourists every year, especially during the grand Simhastha Kumbh Mela. Ujjain is deeply connected with Hindu mythology, astronomy, and ancient Indian culture. Visitors explore temples, ghats, historical sites, and vibrant local markets filled with traditional food and handicrafts. The peaceful evening aarti at Ram Ghat and the city’s spiritual atmosphere make Ujjain one of the most important religious tourism destinations in Madhya Pradesh.",

    transport: {
      airport:
        "Nearest Airport: Devi Ahilyabai Holkar International Airport, Indore",
      railway: "Ujjain Junction Railway Station",
      road:
        "Connected through major highways and bus routes from Indore and Bhopal.",
      local:
        "E-rickshaws, autos, taxis and city buses available."
    }
  },

  {
    id: 4,
    name: "Indore",
    image: "/images/indore.jpg",
    description:
      "Indore is the commercial capital of Madhya Pradesh and one of the cleanest cities in India. The district is famous for its vibrant food culture, historical palaces, modern infrastructure, and nearby tourist destinations. Popular attractions include Rajwada Palace, Lal Bagh Palace, Sarafa Bazaar, and nearby picnic spots like Patalpani Waterfall and Tincha Falls. Indore is also known for its energetic nightlife, shopping streets, and educational institutions. Tourists enjoy the city’s unique combination of heritage and urban lifestyle. With excellent transportation and hospitality services, Indore serves as a major tourism and travel hub in central India.",

    transport: {
      airport: "Devi Ahilyabai Holkar International Airport",
      railway: "Indore Junction Railway Station",
      road:
        "Well connected via Agra-Mumbai Highway and state highways.",
      local:
        "iBus service, taxis, autos and app-based cab services available."
    }
  },

  {
    id: 5,
    name: "Jabalpur",
    image: "/images/jabalpur.jpg",
    description:
      "Jabalpur is a historically rich district located on the banks of the Narmada River and is famous for the stunning Marble Rocks of Bhedaghat. Tourists visit the district for boating, waterfalls, ancient temples, and scenic viewpoints. Dhuandhar Falls is one of the most popular attractions, especially during monsoon season when the waterfall becomes extremely powerful and beautiful. Jabalpur also has military significance and cultural heritage connected with central India. The district offers a mix of adventure tourism, spiritual sites, and natural beauty. Its railway and road connectivity make it an important gateway for travelers exploring Madhya Pradesh.",

    transport: {
      airport: "Jabalpur Airport (Dumna Airport)",
      railway: "Jabalpur Junction Railway Station",
      road:
        "Connected through NH-30 and important state highways.",
      local:
        "Local buses, autos, taxis and cab services available."
    }
  },

  {
    id: 6,
    name: "Khajuraho",
    image: "/images/khajuraho.jpg",
    description:
      "Khajuraho district is internationally famous for its UNESCO World Heritage temples built by the Chandela dynasty. The temples are known for their extraordinary carvings, detailed sculptures, and stunning Nagara-style architecture. Tourists from around the world visit Khajuraho to explore Indian art, history, and spirituality. The district also hosts cultural festivals featuring classical dance and music performances against the backdrop of illuminated temples. Besides heritage tourism, Khajuraho offers peaceful surroundings and nearby nature attractions. Its airport and tourism infrastructure make it one of the most important international tourism destinations in Madhya Pradesh and India.",

    transport: {
      airport: "Khajuraho Airport",
      railway: "Khajuraho Railway Station",
      road:
        "Connected through Chhatarpur and Satna road routes.",
      local:
        "Tourist taxis, autos and rental vehicles available."
    }
  },

  {
    id: 7,
    name: "Gwalior",
    image: "/images/gwalior.jpg",
    description:
      "Gwalior is a historic district famous for the majestic Gwalior Fort, royal palaces, ancient temples, and rich musical heritage. The city played an important role in Indian history and was ruled by several powerful dynasties including the Scindias. Tourists visit attractions like Jai Vilas Palace, Sas Bahu Temple, Tansen Tomb, and Man Singh Palace. Gwalior is also known for classical music traditions and hosts the famous Tansen Music Festival every year. The district beautifully combines history, architecture, and culture, making it a major heritage tourism destination in Madhya Pradesh with excellent transportation facilities for travelers.",

    transport: {
      airport: "Rajmata Vijaya Raje Scindia Airport",
      railway: "Gwalior Junction Railway Station",
      road:
        "Connected via NH-44 and major North Indian highways.",
      local:
        "Autos, taxis and buses available across the city."
    }
  },

  {
    id: 8,
    name: "Mandla",
    image: "/images/mandla.jpg",
    description:
      "Mandla district is widely known for Kanha National Park, one of India’s most famous tiger reserves and wildlife tourism destinations. Surrounded by forests, rivers, and tribal villages, the district offers a unique eco-tourism experience for nature lovers and adventure seekers. Visitors enjoy jungle safaris, birdwatching, photography, and tribal cultural experiences. The district is rich in biodiversity and supports animals like tigers, leopards, deer, and rare bird species. Mandla also has historical significance with old forts and temples located near the Narmada River. Its peaceful natural environment makes it a perfect destination for wildlife and nature tourism.",

    transport: {
      airport: "Nearest Airport: Jabalpur Airport",
      railway: "Nearest Railway Station: Jabalpur Junction",
      road:
        "Connected through Mandla-Jabalpur state highways.",
      local:
        "Jeeps, buses and taxis available for local transport."
    }
  },

  {
    id: 9,
    name: "Sagar",
    image: "/images/sagar.jpg",
    description:
      "Sagar is an educational and cultural district located in central Madhya Pradesh, known for its lakes, temples, and historical importance. The district has several scenic water bodies and peaceful locations that attract local tourists and families. Sagar is also famous for Dr. Harisingh Gour University, one of the oldest universities in the state. Religious places, gardens, and nearby heritage sites contribute to its tourism value. The district offers a calm atmosphere with a blend of urban facilities and traditional culture. Travelers often visit Sagar while exploring nearby historical regions and spiritual destinations in Madhya Pradesh.",

    transport: {
      airport: "Nearest Airport: Khajuraho Airport",
      railway: "Sagar Railway Station",
      road:
        "Connected through NH-44 and regional highways.",
      local:
        "Autos, buses and taxis available throughout the district."
    }
  },

  {
    id: 10,
    name: "Chhindwara",
    image: "/images/chhindwara.jpg",
    description:
      "Chhindwara is a naturally rich district surrounded by forests, hills, rivers, and tribal culture in southern Madhya Pradesh. The district is known for its beautiful landscapes, waterfalls, caves, and religious sites that attract both tourists and pilgrims. Adventure seekers enjoy trekking and exploring the Satpura region around Chhindwara. The district also preserves tribal traditions, handicrafts, and local festivals that reflect the cultural diversity of Madhya Pradesh. With pleasant weather and green surroundings, Chhindwara provides a refreshing travel experience away from crowded tourist cities. Its natural beauty and eco-tourism potential continue to attract more visitors every year.",

    transport: {
      airport: "Nearest Airport: Dr. Babasaheb Ambedkar International Airport, Nagpur",
      railway: "Chhindwara Junction Railway Station",
      road:
        "Connected through NH-547 and nearby state highways.",
      local:
        "Shared autos, taxis and buses available."
    }
  },

  {
    id: 11,
    name: "Burhanpur",
    image: "/images/burhanpur.jpg",
    description:
      "Burhanpur is a historically significant district in Madhya Pradesh known for its Mughal architecture, spiritual heritage, and cultural importance. Located on the banks of the Tapti River, the city once served as an important center during the Mughal period and still preserves many historical monuments, mosques, forts, and palaces. Tourists visit famous attractions like Shahi Qila, Jama Masjid, Dargah-e-Hakimi, and ancient water management systems built during the Mughal era. Burhanpur is also associated with Mumtaz Mahal, whose body was temporarily kept here before being moved to Agra for the construction of the Taj Mahal. The district beautifully combines history, spirituality, and heritage tourism.",

    transport: {
      airport: "Nearest Airport: Devi Ahilyabai Holkar Airport, Indore",
      railway: "Burhanpur Railway Station",
      road:
        "Connected through NH-53 and major Maharashtra-MP highways.",
      local:
        "Autos, buses and taxis available for city travel."
    }
  }
];

export default districts;