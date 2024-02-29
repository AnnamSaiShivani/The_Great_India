var config = {
    style: 'mapbox://styles/mapbox/outdoors-v12',
    accessToken: 'pk.eyJ1Ijoic2dtYXBib3giLCJhIjoiY2s5NHViY251MDUweDNkbzVnYmJtbXYydCJ9.8Ra0D8yuCz7g6UMyWaMNpA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Great India',
    subtitle: '',
    byline: 'By Code Crafters',
    footer: '',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Charminar',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/th.jpg',
            description: 'This 400-years-old structure was built by Sultan Muhammed Quli Qutb Shah, the 5th Sultan of the illustrious Qutb Shahi dynasty. An inseparable part of the history of Hyderabad, the Sultan built the monument right after shifting his capital from Golkonda to Hyderabad. ',
            location: {
                center: [78.47462, 17.36121],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Hari Parbat Fort ,Jammu and Kashmir',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/hari parbat.jpg',
            description:'One of the most well-known historical places in Jammu and Kashmir, the Hari Parbat Fort is one that you would not want to miss. Built in a way that the fort is visible from all corners of Srinagar city, it is famous for its scenic surroundings that consist of dense forests and exotic gardens. It was constructed in the eighteenth century and was later developed by an Afghan Governor by the name of Atta Mohammad ',
            location: {
                center: [74.40669, 33.65590],
                zoom: 9.16,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Kargil-War-Story',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/Kargil-War-Story.jpg',
            description: 'The Kargil War, also known as the Kargil conflict, took place in 1999 between Indian and Pakistani forces in the Kargil district of Jammu and Kashmir. Pakistani troops had infiltrated into strategic positions on the Indian side of the Line of Control, leading to a military response from India. After international diplomatic pressure, Pakistani forces withdrew, and India regained control of the region. The conflict marked one of the only instances of conventional warfare between nuclear-armed states.',
            location: {
                center: [76.43522, 33.84987],
                zoom: 7.91,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Kullu and Manali',
            image: 'C:/Users/annam/Downloads/kulluu.jpg',
            description: 'One of the best places to visit in Himachal Pradesh is Kullu and Manali. If you are on a lookout for fresh air and green mountains amidst the snow-covered ranges, then Kullu Manali indeed should be on the top of your list. There are numerous awesome places to visit in Manali that makes your vacation a perfect one!',
            location: {
                center: [77.39910, 32.00140],
                zoom: 9.78,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fivth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The Golden Temple',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/goleden.jpg',
            description: 'The Golden Temple, located in Amritsar, Punjab, is the most significant shrine in Sikhism. It was built by Maharaja Ranjit Singh in the nineteenth century over a man-made pool completed by Guru Ram Das in 1577. The temple is open to all people, regardless of religion, and welcomes over 150,000 visitors every day. The temple complex includes Akal Takht, the chief center of religious authority in Sikhism, as well as a museum and a free community kitchen. The temple is also known as Darbār Sahib and Harmandir Sahib, which translates to "House of God" in Punjabi.',
            location: {
                center: [74.87656, 31.61919],
                zoom: 17.90,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'HPCA Stadium',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/dcs.jpg',
            description: 'The Himachal Pradesh Cricket Association Stadium (HPCA Stadium) is a picturesque cricket ground located in Dharamshala, Kangra district, Himachal Pradesh, India. It is the home ground of the Himachal Pradesh cricket team and the headquarter of the Himachal Pradesh Cricket Association. The stadium has hosted Ranji Trophy matches, IPL matches, international ODIs, and Test matches. It is situated at an altitude of 1,457 m above sea level with snow-capped Himalayan mountains in the background',
            location: {
                center: [76.32572, 32.19753],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Mohali',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/mohali.jpeg',
            description: 'Mohali, also known as Sahibzada Ajit Singh Nagar, is a city in Punjab, India, and the headquarters of the Mohali district. It is an IT hub and commercial center with a sub-tropical continental monsoon climate, and has a population of over 170,000. Sikhism is the majority religion, followed by Hinduism, with minorities of Islam, Christianity, and others. The city has a strong economy with a focus on manufacturing and is home to Punjab Tractor Limited and QuarkCity.',
            location: {
                center: [76.72165, 30.65447],
                zoom: 10.83,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7th-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Kurukshetra',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/kh.jpg',
            description: 'Kurukshetra, or Dharmkshetra, is one of the most prominent cities of Haryana, where the great battle of Mahabharata took place. It is situated at the banks of the Godavari and Saraswati rivers of the Kurukshetra district. This city offers a variety of tourist places, such as Brahma Sarovar, Jyotisar, Bhadrakali Temple, etc., and will take you back to the pages of history.',
            location: {
                center: [76.77125, 30.16110],
                zoom: 9.10,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8th-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Panchkula',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/ph.jpg',
            description: 'The city of Panchkula is located on the way to Shimla from Haryana. It is a planned city and a part of the Ambala division. It is also known as the "city of five canals", receiving water from the Ghaggar River. Additionally, Panchkula offers mesmerising sceneries and thick forests with Morni Hills, being a great destination for picnics, birdwatching and short trips.',
            location: {
                center: [77.00105, 30.62453],
                zoom: 10.48,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Jim Corbett National Park',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/jim.jpeg',
            description: "Jim Corbett National Park is a national park in India located in the Nainital district of Uttarakhand state. The first national park in India, it was established in 1936 during the British Raj and named Hailey National Park after William Malcolm Hailey, a governor of the United Provinces in which it was then located. In 1956, nearly a decade after India's independence, it was renamed Corbett National Park after the hunter and naturalist Jim Corbett, who had played a leading role in its establishment and had died the year before. The park was the first to come under the Project Tiger initiative",
            location: {
                center: [79.12694, 29.42078],
                zoom: 12.03,
                pitch: 45.00,
                bearing:-40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10th-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Jal mahal',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/jal.jpg',
            description: "Jal Mahal (meaning Water Palace) is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace was originally constructed around 1699; the building and the lake around it were later renovated and enlarged in the early 18th century by Maharaja Jai Singh II of Amber. I want to know more clik this link https://en.wikipedia.org/wiki/Jal_Mahal",
            location: {
                center: [75.97960, 27.16251],
                zoom: 7.27,
                pitch: 45.00,
                bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Gokarna',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/gokarna.jpeg',
            description: "With its pristine beaches and breathtaking landscapes, Gokarna is a Hindu pilgrimage town in Karnataka and a newly found hub for beach lovers and hippies. Situated on the coast of Karwar, every year Gokarna welcomes hordes of tourists from around the world in search of sanctity and relaxation. The out-of-town beaches like Kudle beach and Om Beach are a different contrast to life inside the town. ",
            location: {
                center: [74.31811, 14.54355],
                zoom: 16.00,
                pitch: 79.77,
                bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12th-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Nainital Lake',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/nainital.jpeg',
            description: "Nainital, also known as Naini Lake, is a natural freshwater body, situated amidst the town of Nainital in Kumaon, Uttarakhand, India. It is tectonic in origin and is mango shaped or crescent shaped and has an outfall at the southeastern end.Nainital, along with other lakes of Kumaon, is integral to tourism and recreation in Kumaon. The lake is also an integral part of Kumaoni folklore.Nainital Lake in Nainital Town of the Nainital district, often called the Lake District of India, is one of the four important lakes of Kumaon; the other three are Sattal Lake, Bhimtal Lake and Naukuchiyatal Lake.It's the 3rd biggest lake by surface area in Uttarakhand.",
            location: {
                center: [79.40248, 29.38684],
		        zoom: 8.74,
		        pitch: 45.00,
		        bearing:0.00
        },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:'',
            onChapterEnter:[],
            onChapterExit:[]
        },
        {
            id: '13th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Red Fort',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/red.jpeg',
            description: 'The Red Fort or Lal Qila (Hindustani: [lal qila]) is a historic fort in the Old Delhi neighbourhood of Delhi, India, that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1639, when he decided to shift his capital from Agra to Delhi. Originally red and white, its design is credited to architect Ustad Ahmad Lahori, who also constructed the Taj Mahal. The fort represents the peak in the Mughal architecture under Shah Jahan and combines Persian palace architecture with Indian traditions.',
            location: {
                center: [77.24112, 28.65580],
		        zoom: 16.28,
		        pitch: 82.94,
		        bearing:180.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
        {
            id: '14th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Qutub Minar',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/minar.jpeg',
            description: "The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and 'victory tower' that forms part of the Qutb complex, which lies at the site of Delhi's oldest fortified city, Lal Kot, founded by the Tomar Rajputs. It consists of 399 stepsIt is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India.It is one of the most visited tourist spots in the city, mostly built between 1199 and 1220.It can be compared to the 62-metre all-brick Minaret of Jam in Afghanistan, of c. 1190, which was constructed a decade or so before the probable start of the Delhi tower.",
            location: {
                center: [77.18573, 28.52461],
		        zoom: 16.00,
		        pitch: 82.94,
		        bearing:180.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
{
            id: '15th-chapter',
            alignment: 'right',
            hidden: false,
            title: 'India Gate',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/gate.jpeg',
            description: "The India Gate is a war memorial located near the Kartavya path on the eastern edge of the 'ceremonial axis'of New Delhi, formerly called Rajpath. It stands as a memorial to 74,187 soldiers of the Indian Army who died between 1914 and 1921 in the First World War, in France, Flanders, Mesopotamia, Persia, East Africa, Gallipoli and elsewhere in the Near and the Far East, and the Third Anglo-Afghan War. 13,300 servicemen's names, including some soldiers and officers from the United Kingdom, are inscribed on the gate.[2] Designed by Sir Edwin Lutyens, the gate evokes the architectural style of the ancient Roman triumphal arches such as the Arch of Constantine in Rome, and later memorial arches; it is often compared to the Arc de Triomphe in Paris, and the Gateway of India in Mumbai.",
            location: {
                center: [77.22997, 28.61782],
		        zoom: 16.97,
		        pitch: 82.94,
		        bearing:180.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
{
            id: '16th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Ranthambore National Park',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/rath.jpeg',
            description: 'Ranthambore National Park is one of the biggest and most renowned national parks in Northern India. The park is located in the Sawai Madhopur district of southeastern Rajasthan, which is about 130 km from Jaipur.Once considered as one of the famous and former hunting grounds of the Maharajas of Jaipur, today the Ranthambore National Park terrain is a major wildlife tourist attraction that has drawn the attention of many wildlife photographers and lovers.',
            location: {
                center: [76.41989, 26.04751],
		zoom: 15.74,
		pitch: 71.72,
		bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
{
            id: '17th-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Buland Darwaza',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/bulan.jpeg',
            description: "Buland Darwaza (lit.'High Gate'), or the 'Door of Victory', was built in 1575 by Mughal emperor Akbar to commemorate his victory over Gujarat. It is the main entrance to the Jama Masjid at Fatehpur Sikri, which is 43 km from Agra,India.",
            location: {
                center: [74.63372, 26.46879],
		        zoom: 12.50,
		        pitch: 71.72,
		        bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
{
            id: '18th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Meenakshi temple',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/meena.jpeg',
            description: 'Arulmigu Meenakshi Sundareswarar Temple a.k.a Arulmigu Meenakshi Amman Thirukkovil is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to the goddess Meenakshi, a form of Shakti, and her consort, Sundareshwarar, a form of Shiva.',
            location: {
                center: [78.11993, 9.91947],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
{
            id: '19th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Taj Mahal',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/taj.jpeg',
            description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.',
            location: {
                center: [78.04220, 27.17261],
		        zoom: 17.35,
		        pitch: 79.77,
		        bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
{
            id: '20th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Ratu palace',
            
            description: 'The Ratu Palace, belonging to the 2,000 years old Nagvanshi dynasty, was conceptualised by Maharaja Udai Pratap Shah Deo during 1899–1901. Designed after Buckingham Palace, it has 103 rooms and manicured gardens. The dynasty shifted its seat from Palkot to Ratu in 1870.',
            location: {
                center: [106.80116, -6.22666],
		zoom: 16.00,
		pitch: 79.77,
		bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
        {
            id: '21th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Palolem Beach',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/pal.jpeg',
            description: "Palolem Beach is situated in Canacona in southern Goa, India. The beach attracts many international tourists, mainly during the winter season between November and March. It is considered to be one of the region's most beautiful beaches.",
            location: {
                center: [74.02264, 15.01005],
		        zoom: 16.00,
		        pitch: 79.77,
		        bearing:0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
        {
            id: '22th-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Palolem Beach',
            image: 'C:/Users/annam/Downloads/storytelling-main/storytelling-main/src/images/pal.jpeg',
            description: "",
            location: {
                center: [79.41942, 13.62641],
                zoom: 16.74,
                pitch: 79.77,
                bearing:62.46
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit:[]
        },
    ]
};
