const cities = [
  {
    id: 1,
    name: "Bhopal",
    image: "/images/bhopal.jpg",
    description:
      "Bhopal, the capital city of Madhya Pradesh, is famously known as the City of Lakes because of its beautiful water bodies and greenery. The city perfectly blends modern development with rich historical heritage built during the rule of the Begums. Popular tourist attractions include Upper Lake, Van Vihar National Park, Taj-ul-Masajid, Bharat Bhavan, and Tribal Museum. Visitors enjoy boating, street food, shopping markets, and cultural festivals throughout the year. Bhopal’s peaceful atmosphere, scenic beauty, and historical architecture make it one of the most attractive tourist destinations in central India for both leisure and cultural tourism.",

    transport: {
      airport: "Raja Bhoj International Airport",
      railway: "Bhopal Junction, Rani Kamlapati Railway Station",
      road:
        "Connected via NH-46 and NH-146 with interstate bus connectivity.",
      local:
        "City buses, taxis, auto-rickshaws, e-rickshaws and cab services available."
    }
  },

  {
    id: 2,
    name: "Indore",
    image: "/images/indore.jpg",
    description:
      "Indore is the commercial capital of Madhya Pradesh and one of the cleanest cities in India. Famous for its food culture, vibrant nightlife, shopping markets, and modern lifestyle, the city attracts tourists from all over the country. Visitors explore Rajwada Palace, Lal Bagh Palace, Sarafa Bazaar, Chappan Dukan, and nearby waterfalls like Patalpani. Indore is also an important educational and business hub with excellent infrastructure and hospitality services. The combination of heritage, delicious street food, urban attractions, and nearby nature spots makes Indore one of the most dynamic and attractive cities in Madhya Pradesh.",

    transport: {
      airport: "Devi Ahilyabai Holkar International Airport",
      railway: "Indore Junction Railway Station",
      road:
        "Well connected through Agra-Mumbai Highway and state highways.",
      local:
        "iBus rapid transit, autos, taxis and app-based cab services available."
    }
  },

  {
    id: 3,
    name: "Ujjain",
    image: "/images/ujjain.jpg",
    description:
      "Ujjain is one of the holiest cities in India and an important spiritual destination situated on the banks of the sacred Kshipra River. The city is globally famous for the Mahakaleshwar Jyotirlinga temple, attracting millions of pilgrims every year. Ujjain also hosts the Simhastha Kumbh Mela, one of the world’s largest religious gatherings. The city is deeply connected with Hindu mythology, astronomy, and ancient traditions. Tourists enjoy visiting temples, ghats, local markets, and evening aarti ceremonies. Ujjain’s spiritual atmosphere, rich culture, and historical importance make it one of the most visited cities in Madhya Pradesh.",

    transport: {
      airport:
        "Nearest Airport: Devi Ahilyabai Holkar International Airport, Indore (55 km)",
      railway: "Ujjain Junction Railway Station",
      road:
        "Connected through major state highways and bus routes from Indore and Bhopal.",
      local:
        "Shared autos, e-rickshaws, taxis and local buses available."
    }
  },

  {
    id: 4,
    name: "Gwalior",
    image: "/images/gwalior.jpg",
    description:
      "Gwalior is a historic city known for its majestic hilltop fort, royal palaces, temples, and musical heritage. The Gwalior Fort is considered one of the most beautiful forts in India and offers breathtaking views of the city. Visitors also explore Jai Vilas Palace, Sas Bahu Temple, Gujari Mahal, and Tansen Tomb. Gwalior has played an important role in Indian history and is associated with classical music traditions through the famous Tansen Music Festival. The city beautifully combines history, culture, architecture, and heritage tourism, making it one of the most attractive destinations in Madhya Pradesh.",

    transport: {
      airport: "Rajmata Vijaya Raje Scindia Airport",
      railway: "Gwalior Junction Railway Station",
      road:
        "Connected via NH-44 and major North Indian highways.",
      local:
        "Auto-rickshaws, taxis, e-rickshaws and buses available."
    }
  },

  {
    id: 5,
    name: "Jabalpur",
    image: "/images/jabalpur.jpg",
    description:
      "Jabalpur is a scenic city located on the banks of the Narmada River and is widely known for the Marble Rocks of Bhedaghat and Dhuandhar Falls. Tourists enjoy boating between tall marble cliffs, ropeway rides, and sunset views near the waterfalls. The city also has religious temples, historical monuments, and natural attractions that make it a favorite destination for travelers. Jabalpur serves as an important gateway to wildlife parks and nearby hill stations. Its blend of natural beauty, adventure tourism, and spiritual sites makes it one of the most attractive and visited cities in Madhya Pradesh.",

    transport: {
      airport: "Jabalpur Airport (Dumna Airport)",
      railway: "Jabalpur Junction Railway Station",
      road:
        "Connected through NH-30 and major MP state highways.",
      local:
        "Autos, taxis, buses and app-based cab services available."
    }
  },

  {
    id: 6,
    name: "Khajuraho",
    image: "/images/khajuraho.jpg",
    description:
      "Khajuraho is internationally famous for its UNESCO World Heritage temples built by the Chandela dynasty. The temples are admired for their extraordinary sculptures, intricate carvings, and exceptional Nagara-style architecture. Tourists from around the world visit Khajuraho to explore India’s rich artistic, historical, and spiritual heritage. The city also hosts cultural dance festivals featuring classical Indian performances against illuminated temple backdrops. Besides heritage tourism, Khajuraho offers peaceful surroundings and nearby nature attractions. Its global recognition and unique artistic beauty make it one of the most attractive cultural tourism destinations in Madhya Pradesh and India.",

    transport: {
      airport: "Khajuraho Airport",
      railway: "Khajuraho Railway Station",
      road:
        "Connected via Chhatarpur and Satna state highways.",
      local:
        "Auto-rickshaws, taxis and tourist guides available."
    }
  },

  {
    id: 7,
    name: "Orchha",
    image: "/images/orchha.jpg",
    description:
      "Orchha is a charming heritage town located on the banks of the Betwa River and is known for its magnificent palaces, temples, and cenotaphs. The town reflects the grandeur of Bundela Rajput architecture and historical culture. Tourists explore attractions like Orchha Fort Complex, Jahangir Mahal, Raja Mahal, and Chaturbhuj Temple. The peaceful riverside atmosphere and stunning sunsets make Orchha a favorite destination for photographers and history lovers. Evening light and sound shows further enhance the visitor experience. Orchha’s blend of history, architecture, spirituality, and scenic beauty makes it one of the most attractive towns in Madhya Pradesh.",

    transport: {
      airport: "Nearest Airport: Gwalior Airport (120 km)",
      railway: "Jhansi Junction Railway Station",
      road:
        "Connected through Jhansi-Orchha road and state highways.",
      local:
        "Auto-rickshaws, taxis and rental bikes available."
    }
  },

  {
    id: 8,
    name: "Pachmarhi",
    image: "/images/pachmarhi.jpg",
    description:
      "Pachmarhi is the only hill station in Madhya Pradesh and is popularly known as the Queen of Satpura. Surrounded by forests, waterfalls, caves, and mountains, Pachmarhi attracts nature lovers, adventure seekers, and families throughout the year. Popular attractions include Bee Falls, Dhoopgarh, Pandav Caves, Jata Shankar Cave, and Satpura National Park. Visitors enjoy trekking, sightseeing, wildlife experiences, and peaceful natural surroundings. The cool climate and greenery provide a refreshing escape from busy city life. Pachmarhi’s natural beauty and adventure tourism opportunities make it one of the most attractive destinations in Madhya Pradesh.",

    transport: {
      airport: "Nearest Airport: Raja Bhoj Airport, Bhopal",
      railway: "Pipariya Railway Station",
      road:
        "Connected through Pipariya-Pachmarhi hill road.",
      local:
        "Jeeps, taxis and tourist vehicles available."
    }
  },

  {
    id: 9,
    name: "Mandu",
    image: "/images/mandu.jpg",
    description:
      "Mandu is a historic city famous for its Afghan architecture, romantic history, and scenic hilltop surroundings in Madhya Pradesh. The city is home to iconic monuments such as Jahaz Mahal, Hindola Mahal, Baz Bahadur Palace, and Rani Roopmati Pavilion. During the monsoon season, Mandu becomes exceptionally beautiful with lush greenery and lakes surrounding the ancient ruins. The city is associated with the legendary love story of Baz Bahadur and Rani Roopmati, adding romantic charm to its heritage value. Mandu’s architecture, history, and natural beauty make it one of the most fascinating tourist destinations in central India.",

    transport: {
      airport: "Nearest Airport: Devi Ahilyabai Holkar Airport, Indore",
      railway: "Nearest Railway Station: Indore Junction",
      road:
        "Connected through Dhar and Indore highways.",
      local:
        "Private taxis and local tourist vehicles available."
    }
  },

  {
    id: 10,
    name: "Burhanpur",
    image: "/images/burhanpur.jpg",
    description:
      "Burhanpur is a historically significant city known for its Mughal architecture, mosques, forts, and cultural heritage. Located on the banks of the Tapti River, the city once served as an important Mughal military and trading center. Tourists visit attractions like Shahi Qila, Jama Masjid, Dargah-e-Hakimi, and ancient underground water systems that showcase remarkable engineering skills. Burhanpur is also connected to the history of Mumtaz Mahal before the construction of the Taj Mahal in Agra. The city offers visitors a unique combination of Islamic architecture, historical importance, spirituality, and heritage tourism experiences in Madhya Pradesh.",

    transport: {
      airport: "Nearest Airport: Indore Airport",
      railway: "Burhanpur Railway Station",
      road:
        "Connected via NH-53 and major Maharashtra-MP routes.",
      local:
        "Autos, taxis and buses available throughout the city."
    }
  }
];

export default cities;
