import React, { useEffect } from 'react'
import Header from '../../common/header/Header'
import Home_Private_Confidential from '../home_page_components/home_private_confidential/Home_Private_Confidential'
import Footer from '../../common/footer/Footer'

const Astrology_Yoga = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <div>
        {/*  */}
        <Header/>
         <section className="gi-faq py-[40px] max-[767px]:py-[30px]">
        <div
            className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="custome_viewbox">
                <h1>300 Astrology Yoga</h1>
               <p>Best yogas in kundli or bad yogas in kundli, whatever you are trying to find, your search comes to an end here.</p>
                    <p>Yogas in kundli are one of the most sought elements when it comes to kundli prediction by astrologers. Yogas (planetary combination) in kundli either form at the time of your birth or owing to planetary transits, conjunction, etc., as you happen to live your life. To explain in very simple words, any yoga in kundli forms when one planet, house or sign enters into a relationship with another planet, house or sign through transit, aspect or conjunction. What is necessary here is to note down whether the yoga forming in kundli is a positive yoga or a negative yoga. Based on the positivity or negativity of yoga an astrologer can predict your future.</p>
                    <p>For example, people usually are aware of Raj Yoga in kundli. If you have a Raj Yoga in kundli, it means you shall enjoy prosperity and an abundance of wealth. However, on the other hand, if you have Daridra Yoga, it could bring inauspiciousness or poverty.</p>
                    <p>Apart from Raj Yoga and Daridra Yoga, there are close to 300 more yogas that can form in your kundli. Having said that, here is the list of all Yogas is astrology.</p>
                
                    <div className="table-responsive">
                        <table className="table table_hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Result</th>
                                <th>Quality</th>
                                </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Gajakesari Yoga</td>
                            <td>Jupiter in kendra from Moon</td>
                            <td>Gajkesari yog hints that you may have a number of relatives in your life span. In terms of personality, you would be someone who is generous and cares about people in his/her vicinity. You are destined to accomplish development work as a higher authority like a magistrate. This yog ensures you a lasting reputation even long after death.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sunapha Yoga</td>
                            <td>Any planets, except Sun, in the second house from the Moon.</td>
                            <td>Sunapha Yoga indicates that you will be the proud owner of several properties which will be earned by you through your perseverance and good decisions. You will be extremely rich and have the luxury of living the life of a king. When it comes to your personality, you are intelligent and rarely make bad decisions. Your reputation will be on par with that of a reputed ruler.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Anapha Yoga</td>
                            <td>Any planets in the twelfth house from the Moon.</td>
                            <td>Anapha Yoga suggests that you will enjoy a healthy life with well-formed and properly functioning organs. In terms of your appearance and physique, you will be majestic. By nature, you are polite and generous due to which, you are highly revered. You also have a good reputation which is bolstered through your self-respect and your astute sense of fashion. However, you will experience renunciation and be noted for your austerity in the twilight of your life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhurdhua Yoga</td>
                            <td>Planets on either side of the Moon.</td>
                            <td>Dhurdhua Yoga indicates that you will live a life that is filled with generosity and warmth. You will be blessed with a substantial amount of wealth which will allow you to donate or help others when required. In terms of your personality, you will be known for your kindness and charitable nature. You will also acquire fame, power and reputation in your life. Further, your life will be characterized by the conveyances of kindness and wealth.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kemadruma Yoga</td>
                            <td>No planets on both side of the Moon.</td>
                            <td>Kemadruma Yoga indicates that you might be an individual who is associated with sorrow and unrighteous deeds. You will likely be considered dirty in a practical sense and people might try to stay away from you in the fear of being scammed or hurt in some way. Your indulgence in unfair deeds will push you towards poverty which will also lead to your dependency on others to make a living. In terms of your personality, you are likely to be considered a rogue and a swindler.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Chandra Mangala Yoga</td>
                            <td>Mars conjoins the Moon.</td>
                            <td>Chandra Mangala Yoga indicates that you might be an apathetic person who indulges in unscrupulous works. It is possible that you might sink to a degree where you won’t think twice before using women to your profit. This might even include human trafficking. Your lack of respect for yourself and others will make you violent which makes it likely for you to mistreat your mother. You might even cause trouble to her and your relatives.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Adhi Yoga</td>
                            <td>Benefics are situated in sixth, seventh and eighth houses from the Moon.</td>
                            <td>Adhi Yoga indicates that you are a polite and trustworthy person. People like to be around you due to your uplifting nature. You will prosper in your life and accumulate a considerable amount of wealth. You tend to live a life ornate with luxury and affluence. There will be a lot of happiness in your life and you will enjoy a healthy life as well. When it comes to your enemies, they will have a hard time coming against you as you will come out victorious against them. Your life will also be substantially longer owing to your healthy lifestyle and good overall health.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Chatussagara Yoga</td>
                            <td>All kendras occupied by the planets.</td>
                            <td>Chatussagara Yoga indicates that you will earn the respect of your peers and everyone around you through your work. Your good reputation will be well-earned and on par with a ruler. Your healthy habits dictate that you will be very healthy and go on to live a long life, while your hard-working nature will bring you prosperity and grace. Your name will and reputation will also travel far and wide. When it comes to your family, you will be blessed with good children.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vasumathi Yoga</td>
                            <td>Benefics occupy the upachayas 3, 6, 10, or 11 either from the ascendant or from the Moon.</td>
                            <td>Vasumathi Yoga hints at your hard-working nature. Your diligence and knack for doing what is important to you will turn you into someone who is revered by society. Your perseverance will also bring you wealth and prosperity, along with the freedom of lavish expenditure and independence in life. Your wealth will also allow you to help others when they need you most which might give you a purpose in your life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Rajalakshana Yoga</td>
                            <td>Jupiter, Venus, Mercury and the Moon should be in Lagna or placed in kendra.</td>
                            <td>Rajalakshana Yoga suggests that you will be an individual of great stature who has terrific qualities ingrained in him/her. You will be revered by your peers and your seniors as well. You will not only be endowed with a good personality but also a good physique. When it comes to your appearance, you will be extremely attractive. You will also carry yourself with great respect for yourself and others and you will be deemed as someone with a high personage.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vanchana Chora Bheethi Yoga</td>
                            <td>The Lagna is occupied by a malefic with Gulika in a trine: or Gulika is associated with the lords of Kendras and Thrikonas; or the lord of Lagna is combined with Rahu, Saturn or Ketu.</td>
                            <td>Vanchana Chora Bheethi Yoga points at an individual who is unusually suspicious. Your actions and personality will bring suspicions towards you which can make your life extremely difficult. The constant fear of being judged will make you extremely untrusting and phobic. You will find it difficult to mingle with people as well as you are afraid of being cheated, swindled or robbed. To add insult to your injury, you are also likely to experience huge material losses from unexpected channels.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sakata Yoga</td>
                            <td>Moon in 12th, 6th or 8th house from Jupiter.</td>
                            <td>Sakata Yoga indicates that once you lose your fortune and then you tend to retrieve it. In the matter of identity, you are ordinary and insignificant. Furthermore, you will be suffering from lot of things such as poverty, privation and misery. Also, you are more likely to be pretty stubborn and your relatives mostly hate you.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Amala Yoga</td>
                            <td>10th from Moon or Lagna should be occupied by any benefic planet</td>
                            <td>The person possessing Amala Yoga indicates that they will be achieving lasting fame and reputation. They are believed to have a spotless character. Also, apart from all these things, they will be leading a prosperous and healthy life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Parvata Yoga</td>
                            <td>6th or 8th houses should be either unoccupied or occupied by benefic planets.</td>
                            <td>The Parvata Yoga in a person specifies many diverse characteristics. Some of the main characteristics of the person are wealthy, prosperous, charitable, humorous and the head of town or village. These are the qualities of a leader. Also, they will be extremely passionate.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kahala Yoga</td>
                            <td>Lords of fourth and ninth houses in Kendras from each other.</td>
                            <td>If you have Kahala Yoga, there are most chances that you are stubborn all the time. Talking about your inner individuality, you are mostly not well informed yet are very daring. Also, you are most likely to be the leader or head of a small army and number of villages.</td>
                            <td>Both</td>
                        </tr>
                        <tr>
                            <td>Vesi Yoga</td>
                            <td>Planets other than Moon occupy 2nd position from Sun.</td>
                            <td>The Vesi Yoga points out at some interesting features in a person. You tend to be extremely fortunate as things always fall in your lap easily and are not liable to any misfortunes. Further, you are known to be very happy and also, try to make everyone around you happy. Considering your personality, you tend to be virtuous and ethical. This means that you don't encourage disbelieving and are true to your morals. Over your life span, you will be exceptionally famous and aristocratic.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vasi Yoga</td>
                            <td>Planets other than Moon occupy 12th position from Sun.</td>
                            <td>The Vasi Yoga is pretty similar to the Vesi Yoga. If you have Vasi Yoga, there will be tons of happiness and pleasure in your life. You are not someone who will get upset over small things and sometimes over big things too. You will be prosperous throughout your life. No matter what happens, you will always tend to be flourishing. Considering your special traits, you are very much liberal and you can almost tolerate everything that comes across you. Lastly, you are the favorite of all the ruling classes.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Obhayachari Yoga</td>
                            <td>Planets other than Moon are on either side of the Sun.</td>
                            <td>The person having the Obhayachari Yoga will be an eloquent speaker. You will have an awe-inspiring talent in speech and everyone listening to you will agree to whatever you say. You will have well-proportioned limbs which allow you to have full-fledged extremities. You tend to be delighted by everything around you, even if it any smallest thing. Everyone who knows you and even meets you for the first time is impressed by you. In conclusion, you will be exceptionally wealthy and famous.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Hamsa Yoga</td>
                            <td>Jupiter occupies a Kendra of his own house or exaltation sign.</td>
                            <td>The person having the Hamsa Yoga denotes that they will be having a lot of fascinating physical attributes. Your legs will be indicating four different styles such as the conch, lotus, fish and ankusa. You will be having a handsome body. As mentioned earlier, you will be slightly more attractive than the rest of the people. Everyone around you will absolutely love you and your personality. Your morals will be strictly ethical and decent. Also, your mind will be pure and you are quite innocent when compared to others.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Malavya Yoga</td>
                            <td>Venus occupies a quadrant of his own house or exaltation sign.</td>
                            <td>The Malavya Yoga points out at your dignified version of life and happiness. Your body would be a well-maintained and have a proportioned physique. Your mind is very strong and you do not get easily distracted if you are determined to concentrate at something. You will have a simple yet elegant life who will be extremely wealthy along with a wife and children. Your organs will be favored by sterility and purity. Your life morals are very much renowned and you are well developed.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sasa Yoga</td>
                            <td>Saturn occupies a Kendra of his own house or exaltation sign.</td>
                            <td>The Sasa Yoga indicates absolute superiority over others. If you are born with the Sasa Yoga, you will have a strict command over your servant. Yet, you will have a questionable character and people might frown upon that. You are most likely to rule over a village or a town. Or you can even be a King. But you will be the sort of King who desires and fancies for other's wealth and money. You have an extreme temperament which leads you to rage upon the first person you see.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Ruchaka Yoga</td>
                            <td>Mars exalted in a Kendra or occupy a Kendra of his own sign.</td>
                            <td>The Ruchaka Yoga overpowers many majestic and distinguished characteristics. You will have a very strong physique, just like a great leader. You will be very much famous over a long period of time. You also tend to be naturally fluent with some ancient lores. Regardless of whether or not you are a King, you make sure to attempt to conform to all the traditions and customs. You will have a ruddy complexion matched with an excellent physique, and charitable disposition. You will be gaining loads of wealth and will have a long and healthy life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bhadra Yoga</td>
                            <td>Disposition of Mercury in a Kendra which is identical to the native's own exaltation sign.</td>
                            <td>Bhadra Yoga indicates that the native will have a strong physique. In terms of your appearance, your face will have the intricacies of a lion which will make you appear strong as well. You will have a well-developed chest along with well-proportioned limbs. When it comes to your personality, you are reserved and mostly taciturn. However, you are extremely helpful to your relatives. Further, you will also live a long life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Budha-Aditya Yoga</td>
                            <td>Mercury combines with the Sun.</td>
                            <td>Budha-Aditya Yoga suggests that you will be highly intelligent. You will persevere to hone your skills and you will have an extremely good reputation for your skilful work. You will also have a healthy notion of yourself and have self-respect. Your peers and the people around you revere you. When it comes to your lifestyle, you will be surrounded by all the comforts you can imagine. Your life will be comfortable for the most part and you will experience happiness throughout your life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Mahabhagya Yoga</td>
                            <td>For a man, birth is during the day and the Sun, Moon, and Lagna are in odd signs. For a woman, birth is during the night and the Sun, Moon, and Lagna are in even signs.</td>
                            <td>For a male, Mahabhagya Yoga indicates that you will have a strong and good character. You will bring happiness to your family and the people around you. Your ideologies will be liberal and you will be extremely generous by nature. You will also be famous and live the life of a ruler or someone on par with a king. You will go on to live a long life. For a female, Mahabhagya Yoga indicates that you will be blessed with wealth and children who will live long. You will also carry yourself with respect and have good etiquette.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Pushkala Yoga</td>
                            <td>The Lord of the sign which is occupied by the Moon (associated with the Lord of Lagna) is in a Kendra or in the house of an intimate friend aspecting Lagna. At the same time, the Lagna is occupied by a powerful planet.</td>
                            <td>Pushkala Yoga indicates that you will be extremely wealthy. You will likely have great skills when it comes to your speech. You can sweet-talk your way out of various difficult situations and might also be skilled enough to motivate and manipulate people. Your good nature will take you to great heights and bring you fame and honour. You might even be revered by the King or someone equivalent. This naturally means that you will have the respect of many Lords as well.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Lakshmi Yoga</td>
                            <td>Lord of Lagna is powerful and the Lord of the ninth occupies its own or exaltation sign identical with a Kendra or Thrikona.</td>
                            <td>Lakshmi Yoga indicates that you will be the owner of tremendous wealth and fortune. You are a learned person and you are incredibly noble by nature. You are known for your integrity which you take very seriously. This builds quite a reputation around you. In terms of your appearance, you are alluring. You make a good leader and will be able to rule over people and make a positive impact. You will enjoy all the pleasures and comforts of life as well.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Gauri Yoga</td>
                            <td>The Lord of the Navamsa, occupied by the Lord of the tenth, joins the tenth house in exaltation and combines with the Lord of Lagna.</td>
                            <td>Gauri Yoga indicates that you are a respectable person who belongs to a reputed family. Your family, and by extension you, own several lands and properties. Your wealth, however, does not taint your character and you are quite charitable by nature. You also perform religious rites and believe in God. When it comes to your family, you will be blessed with sons who will carry your reputation as children with good character. Your nature will bring praise from everyone in your community and beyond.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bharathi Yoga</td>
                            <td>The Lord of the Navamsa, occupied by the Lords of the second, fifth and eleventh, is exalted and combined with the ninth Lord.</td>
                            <td>Bharathi Yoga indicates that you have fame and a reputation throughout the world. You are a reputed scholar which might be the root of your fame. You are quite fond of the arts such as music and romance. When it comes to your personality, you are quite romantic as well. You are also attractive in terms of your appearance. You have a religious inclination in which you have a lot of faith. You might also have eyes that are bewitching.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Chapa Yoga</td>
                            <td>The Ascendant Lord is exalted and the fourth and tenth Lords have interchanged houses.</td>
                            <td>Chapa Yoga indicates that you will be incredibly wealthy and powerful. You will enjoy influence in a King’s Council where your presence will be highly coveted. You have a gracious aura around you. Your influence and wealth will bring you tremendous strength. You might also have great physical strength. Further you might be responsible for the work related to the exchequer, or you might be the controller of the treasury.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sreenatha yoga</td>
                            <td>The exalted Lord of the seventh occupies the tenth house and the Lord of the tenth is with the Lord of the ninth.</td>
                            <td>Sreenatha Yoga indicates that you are graced with the insignia of Vishnu in your body which makes you quite mystifying and fascinating. The insignia might have the conch or the wheel, etc., quite distinctly. When it comes to your personality, you will have a godly aura around you. When you talk to people, you tend to be quite agreeable which makes you likeable by many. You are also blessed with a good spouse with whom you will have loving children.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Lagna Malika</td>
                            <td>All the seven planets occupy the seven houses continuously which are reckoned from Lagna or any particular Bhava.</td>
                            <td>Lagna Malika indicates that you have the graciousness and impression of a King. Not only is your presence kingly, but your lifestyle is kingly as well. It is not unlikely for you to even be an actual King. Even if you are not a King, you will be similar to a ruler or a commander. You will enjoy immense power and influence among people. You are also incredibly wealthy which further increases your influence and power.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Dhana Malika is a powerful Yoga that consists of unique characteristics in a person. If you have the Dhana Malika Yoga, you will be wealthy throughout your life. You won't be facing any kind of issues with wealth. You take your duties very seriously. Duties are very salient to you and you don't let anyone ruin it for you. You find your purpose with determination and trust and you don't leave it until and unless you accomplish it. Also, you tend to be unsympathetic towards everything.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vikrama Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Vikrama Malika indicates that you have all the qualities of a great ruler. You can rule any village, town of even any bigger provision because you know how to do it. You have seen a lot of wealth since you were young and you will always be rich no matter what happens. You also will be pretty sickly and feeble. Due to this, you always might need attention. You are always surrounded by brave men.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Sukha Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Sukha Malika Yoga in a person indicates a charitable nature. You tend to be benevolent when it comes to rescuing people in need. You don't think of anything when you are determined to do a charity. You tend to be efficiently wealthy. All your forefathers were wealthy and you will too be wealthy just like them.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Putra Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Putra Malika points at extreme religiosity of a person. If you have the Putra Malika, then you believe a lot in your particular religion. When you think about religions, you are extremely devoted towards it. You are also believed to be famous through your entire life. Whatsoever you do, you will gain tons of recognition and almost everyone will be knowing you.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Satru Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Satru Malika is rather not much efficient and perfect. You tend to be overly greedy everywhere. You always want more of everything and are never satisfied of what you already have. You will not be entirely poor but there will be high chances that you have financial crises every now and then.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Kalatra Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Kalatra Malika is quite powerful and substantial. You will be extremely influential for lots of people of out there. Basically, you will be someone upon who everyone looks because you are inspiring. You are also coveted by women mostly. Nevertheless, women find you very intimidating yet they crave for you. You are the hearty desire for many women out there.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Randhra Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Randhra Malika somewhat indicates poverty and economic crisis. You will see yourself always struggling for money and you will find yourself going through a financial crisis most of the time. The people who are superior to you will always be hen pecking you and mostly, you would do nothing there but just tolerate everything.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bhagya Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Bhagya Malika brings happiness in your life. You will be extremely religious and always tend to follow it without any sort of distractions. You will always tend to well-to-do in your life. You will have a growing job with a happy and healthy family. Your brain and physicality tends to be overpowering everyone because you are mightier than the rest of them. Considering your personality, you have a good heart and you are polite enough for anyone.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Karma Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Karma Malika points out respects in your life. People who have known you for a very long time and many people who will know you will always respect you and your decisions without any arguments. This is also partly because you stand up for your morals and ethics. Your virtuosity plays an important role in how people see you. For you, your morals should be right and everything will be alright then.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Labha Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Labha Malika indicates the skills and beauty of determined women. You are extremely inclined towards completing the skills and productivity is you priority in most of the cases. For you, procrastination does not exist. In terms of physical persona, you are a beautiful, witty and attractive woman. You tend to be a natural beauty without any doubt. You appear as a different lady but in a beautiful and graceful kind of way.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vraya Malika</td>
                            <td>All seven planets occupy seven houses continuously reckoned from Lagna or any particular Bhava.</td>
                            <td>The Vraya Malika portrays honour throughout your entire life. Your integrity and honour is something that people absolutely love about you. You always tend to make your own rules and are never overpowered by anyone's decisions. You have a great aura which lets people to gather around you and talk to you. You are very liberal according to many people. They love to respect you and your decisions because they know you will be doing the right thing.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sankha Yoga</td>
                            <td>Lords of 5th and 6th house in mutual Kendras and lord of Lagna is powerful.</td>
                            <td>The Sankha Yoga indicates lots of positivity and zeal in the person. You absolutely love happiness and are also fond of all the pleasures that you gain in your daily life. You tend to be pretty humanitarian and sense anything wrong with anyone. Talking about your life, you are blessed with an amazing wife, children and lands. Just these things are enough to satisfy you and you are not greedy. You are ethically inclined towards righteousness and you believe in always doing good deeds. You are also educated in sciences and are expected to have a good old age life too.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bheri Yoga</td>
                            <td>Venus and Jupiter in mutual Kendras and the lord of 9th is powerfully disposed.</td>
                            <td>The Bheri Yoga specifies that you will be leading a very long and healthy life unlike most people. You would not be having any type of diseases in your body, not even the smallest one. You have genuine qualities of a successful ruler or leader. Talking about financial matters, there are various sources through which you are earning your income. You have an amazing family with a wife and children and you are very happy with them. You are believed to have an exalted soul and you should always trust your instincts.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Mridanga Yoga</td>
                            <td>Lord of the Navamasa occupied by an exalted planet positioned in a trine or quadrant identical with friendly or exalted sign, and the lord of Lagna is strongly disposed.</td>
                            <td>The Mridanga Yoga in your chart indicates quite charismatic features. You will be much respected by the rulers. Considering your social appearance, you will be very famous all your life due to some or the other reason. Also, you are most likely to be the attractive one, unlike most of the people. Lastly, people will be extremely influenced by you. This is because you have an authoritative and leading aura.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Parijatha Yoga</td>
                            <td>Lord of the sign in which the lord of the house occupied by the Ascendant lord, or the lord of Navamasa occupied by the lord of Rasi in which the Ascendant lord is positioned joins a quadrant, a trine or his own exaltation signs.</td>
                            <td>The Parijatha Yoga in your chart indicates that you will have a king-like life. Your happiness will be at par when you will be in your middle age and old age. You will be gaining the recognition like that of a King. You will be much respected and people will always trust in you no matter what happens. Speaking about your inner individuality, you tend to be fond of wars and action. Further, people will know you for your work and generosity. When it comes to your customs and traditions, you like to follow them to your best too.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Gaja Yoga</td>
                            <td>Lord of the 9th from the 11th occupies the 11th in conjunction with the Moon and aspected by the lord of the 11th.</td>
                            <td>The Gaja Yoga demonstrates that your life somewhat revolves around animals. It is to be believed that you will command over animals such as cattle, elephants and horses. You will be dominating them as if you are their leader. Furthermore, you will entirely happy in your life. There will be very less times when you actually will be sad. Wealth will always stay with you and you will not be facing any kinds of financial crisis throughout your life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kalanidhi Yoga</td>
                            <td>Jupiter joins by Mercury and Venus either in the 2nd or the 5th house; Jupiter occupies the 2nd or 5th identical with the swakshetra of Mercury or Venus.</td>
                            <td>The Kalanidhi Yoga in your chart shows that whatever you will pursue, it will be surely through your passion. You are passionate about everything you do. Your nature is liked by everyone because you have a pure heart and soul. Even the King and higher authorities will respect you and your decisions. You will be commanding over different types of conveyances. You will stay immune from all the diseases and you will also have command over aristocratic paraphernalia.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Amsavatara Yoga</td>
                            <td>Venus and Jupiter in Kendras, the Lagna falls in a movable sign and Saturn must be exalted in a Kendra.</td>
                            <td>The Amsavatara Yoga demonstrates that you have an unsullied name and fame. No one will ever point out a finger towards you regarding your fame. You will be well learned versatile. You are also very fond of the sexual pleasures and masochism. You like your passions to be fulfilled as long as they are under a specific control. You also consider yourself to be an authority in philosophy and its details. Eventually, you start to believe you are equal to King or a ruler.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Harihara Brahma Yoga</td>
                            <td>Benefics are in the 8th or 12th house from the 2nd lord; or the Jupiter, the Moon and Mercury are in the 4th, 9th and 8th from the 7th lord, or the Sun, Venus and Mars are in the 4th, 10th and 11th from the lord of Lagna.</td>
                            <td>The person who is born in the Harihara Brahma Yoga is considered to be very lucky and blessed. You will be well-versed with the eminent Vedas. Being such a person, you consider honesty to be your motto. Your life will be full of various kinds of pleasures, including sexual pleasures. You have an influential speech which makes sure that it impresses everyone. Also, you tend to conquer your enemies and their negative energy. You love being helpful to other people and engaging in virtuous deeds.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kusuma Yoga</td>
                            <td>Jupiter is in Lagna, the Moon in the 7th and the Sun in the 8th from the Moon.</td>
                            <td>The Kusuma Yoga point towards some dignified version of yourself. There are very high chances that you are a King or even attain a position equal to that of the King. You tend to be the prime protector of kith and kin. In terms of being a particular ruler, further you are inclined towards finding a new town or a village and become the headman of that place. Lastly, you have an impeccable reputation. Since the very beginning, you have an unsullied name and in the future it will remain the same.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Matsya Yoga</td>
                            <td>Lagna and the 9th are joined by malefics the 5th by both malefics and benefics and the 4th and 8th by malefics.</td>
                            <td>The Matsya Yoga hints towards love and its details. You will definitely be one of the people who are an ocean of love. You love "love" and it is a definite priority for you. Accordingly, you love to read a lot too. You have a really pure heart and soul. Basically, you have a good nature which many people appreciate. Your character is strong and powerful along with religiosity in your nature. You gained a lot of fame throughout your life and will continue to do so until your last breath.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kurma Yoga</td>
                            <td>Benefics occupy the 5th, 6th and 7th and join their exaltation, own or friendly Navamasas; or benefics occupy the 1st, 3rd and 11th identical with their exaltation, own or friendly signs</td>
                            <td>The Kurma Yoga in your chart hints about how famous you will be not just nationally, but internationally too. Your enjoyments matters a lot to you and they are like royalties. Talking about your inner personality, you are very righteous and you believe ethics are an essential part. Further, you are brave enough and courageous to take a stand for yourself or anyone else. Happiness prioritizes in your life and you don't let anything ruin that for you. You also tend to be the leader of men and your temperament is mild unlike others.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Devendra Yoga</td>
                            <td>Lagna is a fixed sign and the lords of the Lagna and the eleventh interchange their houses and the lord of the 2nd is in the 10th and vice versa.</td>
                            <td>The Devendra Yoga in your chart demonstrates that you will have a very handsome appearance. In terms of your nature and audacity, you are quite romantic and you love showing your beloved partner what love actually is. Your reputation too, is unsullied unlike most of the people out there. Furthermore, you are a great builder of fortifications and a commander of armies. In conclusion, you have really long and healthy longevity.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Makuta Yoga</td>
                            <td>Jupiter is in the 9th from the 9th lord, a benefic is in the 9th from Jupiter and Saturn is in the 10th.</td>
                            <td>The Makuta Yoga portrays a different kind of personality and individuality. According to this Yoga, you will be on a level like a King or even a head of thr forest tribes or similar posts. Your aura is pretty powerful and substantial. Although you might be somewhat evil-minded and some of your thoughts are morally wrong. Considering your physical attributes and personality, you are quite successful when talking about sports.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Chandika Yoga</td>
                            <td>Lord of the Navamasa occupied by the lord of the 6th and the lord of the Navamasa occupied by the lord of the 9th combine with the Sun and the Lagna being a fixed sign is aspected by the lord of the 6th.</td>
                            <td>The Chandika Yoga indicates that you have an aggressive approach and attitude towards the life and people. You like charity and are pretty charitable. You have seen lots of wealth in your life and will continue to earn it more and more. Your position of work is equal to a minister or atleast on a similar level to him. Further, you will be always leading a happy life and you will try to keep everyone around you very happy. Lastly, you tend to gain fame over a long period of time.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Jaya Yoga</td>
                            <td>The lord of the 6th is debilitated and the lord of the 10th is deeply exalted.</td>
                            <td>The Jaya Yoga specifies that the native will be happy throughout his/her entire life. You don't get upset more often and always try to make everyone happy too. You also tend to be successful as well as victorious over your enemies. Talking about your individuality, you are always successful and fortunate over all your ventures. Lastly, your life will be always long, healthy and happy. You wouldn't be facing any kinds of problems in your life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vidyut Yoga</td>
                            <td>The 11th lord is in deep exaltation and joins Venus in a Kendra from the lord of Lagna.</td>
                            <td>The Vidyut Yoga in your chart hints about a charitable nature of a person. You are a person who loves different kinds of pleasures and you seem to enjoy all of them to your best. Speaking of wealth, you have a lit of wealth with you. Further, you are more of a controller or treasurer of that wealth. You consider yourself equal to a King or at least similar level. You also have the traits like that of a King because your characteristics portray such knowledge.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Gandharva Yoga</td>
                            <td>The 10th lord is in the Kama Thrikona, the lord of Lagna and Jupiter are in association, the Sun being strong is exalted and the Moon occupies the 9th.</td>
                            <td>The Gandharva Yoga specifies various traits that exist in a person. The Gandharva Yoga in your chart shows that you will attain unparalleled skills in fine arts and similar subjects. You tend to be strong both mentally as well as physically. Your personality is such that you love all types of pleasures. Your dressing sense is much better than other people and you dress up as if it is the last day of your life. Further, it is believed that you will gain loads of fame and it is also believed that you will live upto 68 years.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Siva Yoga</td>
                            <td>The lord of the 5th is in the 9th, the lord of the 9th is in the 10th, and the lord of the 10th is in the 5th.</td>
                            <td>The Siva Yoga in your chart hints that you are related to a trading business. You have the qualities like a professional trader and you further are believed to be a conqueror as well as the commander of armies. You are most likely to lead the group with your statistics and knowledge. You have great wisdom and experience about various aspects of life and love. People tend to believe you because of your wisdom and you will be surely leading a virtuous life ahead.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vishnu Yoga</td>
                            <td>The lord of the Navamasa in which the 9th lord is placed, and the 10th lord joins the 2nd house in conjunction with the 9th lord.</td>
                            <td>The Vishnu Yoga in your chart expresses that you will definitely lead an enjoyable and delightful life. Speaking of your life, you will be acquiring fortunes from diverse countries and their people too. Your earning speak for you because you will be earning lakhs in your life, which is pretty good. Your speech is an attractive trait of you because you are well-versed in discussions and quite witty too. Furthermore, you believe your heart and soul in Vishnu. Lastly, you will lead a healthy life without any diseases and you will also be praised by rulers.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Brahma Yoga</td>
                            <td>Jupiter and Venus are in Kendras respectively from the lords of the 9th and 11th, and Mercury is in a similar position from the lord of either Lagna or the 10th.</td>
                            <td>The Brahma Yoga indicates that there will be ample amount of luxuries in your life. You will not be facing any type of major issues in your life and will always have luxurious living. Brahmins also tend to respect you enough, the same with many learned men too. Additionally, your education will be extremely influential and you will be a learned person. Your life will be long and healthy and you are more of a charitable person. You are always inclined towards helping others and doing good deeds always.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Indra Yoga</td>
                            <td>The lords of the 5th and the 11th interchange their houses and the Moon is in the 5th.</td>
                            <td>The person having the Indra Yoga in their chart indicates that they are probably going to lead a supreme life. You are most likely to be highly courageous in whichever deeds you perform. You are pretty famous among your peers and other people too, and will be having that fame until you die. You are also believed to be the King of the Kings and further, have superior enjoyments in your life. However, you are most likely to live upto just 36 years.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Ravi Yoga</td>
                            <td>The Sun joins the 10th and the lord of the 10th must be in the 3rd in conjunction with Saturn.</td>
                            <td>The Ravi Yoga in your chart points out at various attributes of you as a person. You are highly respected by everyone, including the higher authorities and rulers. You are much educated and are well-versed in subjects related to science. You gained a lot of fame after you turned 15 and will continue to do so. Talking about your individuality, you are highly passionate about everything. Although, you like being simple and having simple food. Your physical attributes show that you have lotus-like eyes and a well-developed chest.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Garuda Yoga</td>
                            <td>The lord of the Navamasa occupied by the Moon is exalted and birth occurs during daytime when the Moon is waxing.</td>
                            <td>The Garuda Yoga shows that you are very nuch respected by pious people all over the world. People are very fond of what you speak because you have a polished speech unlike many people. Your enemies would show that they don't fear you but in reality, they fear you a lot more. You are considered to be very strong both mentally as well as physically. Although you need to take of yourself after you turn 34 as you possess danger from poison.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Go Yoga</td>
                            <td>Strong Jupiter occupies his Moolathrikona with the lord of the 2nd house and the lord of Lagna is in exaltation.</td>
                            <td>The Go Yoga in your chart demonstrates about how you have lived your life to the fullest. You come from a very respectable family and they have earned that respect from a very long time. Your qualities are equal to that of a King or someone on an almost equal level to him. Further, you are believed to be wealthy since you were young and also will gain wealth over a long period of time. Your personality and identity is much more stronger that people perceive.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Gola Yoga</td>
                            <td>The full Moon is in the 9th in conjunction with Jupiter and Venus, and Mercury joins Navamasa Lagna.</td>
                            <td>The Gola Yoga has very polite and innocent features in them. The show politeness to everyone see and meet, even if they are their enemies. You are very well educated, which is one of the reasons people admire you. Your post is similar to a Magistrate or someone on an equal level to him. You will be long-lived with a happy and healthy lifestyle. In terms of eating, you are very much fond of wholesome foods.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Thrilochana Yoga</td>
                            <td>The Sun, the Moon and Mars are in trines with each other.</td>
                            <td>The Thrilochana Yoga in your chart specifies that you possess ample amounts of wealth. You have been wealthy from the very beginning and you will be wealthy throughout your entire life. Enemies of yours fear you the most and actually are not a danger to you because of they fear you a lot. You are highly intelligent and your smartness cannot be matched with an ordinary person. Lastly, you will have a good and happy longevity.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kulavardhana Yoga</td>
                            <td>All planets are in the 5th from the Lagna, the Sun and the Moon.</td>
                            <td>The Kulavardhana Yoga in your chart demonstrates beautiful attributes of your personality. You belong to an unbroken line of successors. Actually, you are also one of them. You are very wealthy and it is possible that you gain more wealth than ever. Talking about your health, you will be facing no problems in that region. Your life will always be blooming with happiness and you shall always cherish that. Also, you will live long without any complications regarding any matter.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Yupa Yoga</td>
                            <td>All the planets occupy the four signs continuously from the Lagna and other Kendras respectively.</td>
                            <td>The Yupa Yoga in your chart indicates that you are liberal from the time you were born. Also, it is to be believed that you are very much self-possessed and you only think about yourself while ignoring other's matters. You are known for your charitable deeds among many people. You gained fame because of the deeds that you performed regarding charity.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Ishu Yoga</td>
                            <td>All the planets occupy the four signs continuously from the Lagna and other Kendras respectively.</td>
                            <td>The Ishu Yoga specifies supremacy over people. This is because you are most likely to be the Superintendent or head of a jail. You have many qualities that make you a successful person and ruler. Furthermore, in the future too, you will acquire such positions wherein you will have to be the head of the concentration camps or even places where strictness is necessary.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sakti Yoga</td>
                            <td>All the planets occupy the four signs continuously from the Lagna and other Kendras respectively.</td>
                            <td>The person having the Sakti Yoga in their chart are considered to be a little unlucky. You tend to be super lazy when it comes to completing your tasks and are always procrastinating things. Also, you are considered to be a slothful person who creates negative energy around everyone. Generally, people do not like you much because of your nature and you always are devoid of rich people.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Danda Yoga</td>
                            <td>All the planets occupy the four signs continuously from the Lagna and other Kendras respectively.</td>
                            <td>The Danda Yoga points out the vivid natures that you possess. Because of this reason, somewhere you lack happiness and pleasure. People believe that you cannot function properly and hence, they leave you behind and ignore you. Furthermore, you family i.e. your wife and children also tend to upset you more often and you stay upset all the time because of them.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Nav Yoga</td>
                            <td>By virtue of the disposition of the seven planets in seven continuous houses from Lagna, 4th house, 7th house, and 10th house respectively.</td>
                            <td>The Nav Yoga in your chart expresses that there are some waves of emotions when you are emotional. Occasionally, you tend to be very happy and confident. But in some time, you get upset. Additionally, you will gain a lot of fame throughout your entire life. Lastly, you tend to experience misery every now and then.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Kuta Yoga</td>
                            <td>By virtue of the disposition of the seven planets in seven continuous houses from Lagna, 4th house, 7th house, and 10th house respectively.</td>
                            <td>The person who will have the Kuta Yoga in his birth chart has some negative features in him. The person born in the Kuta Yoga will be an experienced liar. You tend to lie literally about each and every thing possible. You are believed to gain a position such that of a jailor.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Chhatra Yoga</td>
                            <td>By virtue of the disposition of the seven planets in seven continuous houses from Lagna, 4th house, 7th house, and 10th house respectively.</td>
                            <td>The Chhatra Yoga solely indicates happiness throughout your entire life. This is the best choice that you could choose in your life. You will receive nothing but happiness from each and every person you meet.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Chapa Yoga</td>
                            <td>By virtue of the disposition of the seven planets in seven continuous houses from Lagna, 4th house, 7th house, and 10th house respectively.</td>
                            <td>The person having the Chapa Yoga in their birth chart always have happiness in their relationships and lives. You tend to be brave in any task you perform or even try for. You will experience extreme happiness when you will be in your initial and final period of life. At that time, such circumstances will take place that will definitely make you happy no matter what.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Ardha Chandra Yoga</td>
                            <td>All planets occupy the seven houses beginning from a Panapara or Apoklima.</td>
                            <td>The Ardha Chandra Yoga in your chart shows some optimistic results. Talking about your physical features, you will be fair and will have pleasing features. Whenever someone looks at you, they will be allured by your look initially. You will be happy throughout your entire life. Happiness is something that isn't for everyone but you're the lucky one and you have been happy since you were young and will continue to do so.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Chandra Yoga</td>
                            <td>All planets occupy the 1st, 3rd, 5th, 7th, 9th, and 11th houses.</td>
                            <td>The Chandra Yoga hints that you will be possessing features similar to that of a King or someone on an equal level to him. You will be gaining an ample amount of attention, respect and support from other people. You also tend to take command or more of a submission over certain people. Further, you will earn a lot throughout your life and also, you will be spending that wealth in a proper place</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Gada Yoga</td>
                            <td>All planets occupy two adjacent Kendras, the 1st and 7th houses, and the 4th and 10th houses respectively.</td>
                            <td>The Gada Yoga in your personality demonstrates how much of a religious person you are. There are high chances that you dedicate your entire time and effort for the religion you follow and do the most that you can. Additionally, you will be pretty wealthy and prosperous. There are chances that people might try to take advantage of you because of your money and wealth.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sakata Yoga</td>
                            <td>All planets occupy two adjacent Kendras, the 1st and 7th houses, and the 4th and 10th houses respectively.</td>
                            <td>The person born in the Sakata Yoga will be poor throughout their entire life. Considering your domestic and social life, you are more of a poor as well as unhappy person. It doesn't seem like you care if you are happy or not in your life. People tend to ignore you because of this behavior of yours.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Vihaga Yoga</td>
                            <td>All planets occupy two adjacent Kendras, the 1st and 7th houses, and the 4th and 10th houses respectively.</td>
                            <td>The Vihaga Yoga indicates that you will be a vagrant person. You would stay at one place and continuously move from one place to another. People are most likely to call you a drifter and further, you tend to be quarrelsome. You argue or fight over silly things that are not even important. When someone tells you the truth about yourself, you come off as a mean and rude person. You cannot digest the fact that someone showed you the mirror.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Vajra Yoga</td>
                            <td>Benefics occupy the Ascendant and 7th house, while malefics occupy the 4th and 10th house.</td>
                            <td>The Vajra Yoga in your chart shows that you will be more of a happy person in your life. Such situations always tend to occur in your life that always make you happy no matter what. Additionally, you have handsome and beautiful physical attributes. People tend to attract towards you because of these characteristics.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Yava Yoga</td>
                            <td>Vice versa of Vajra Yoga</td>
                            <td>The Yava Yoga in your chart shows that you will be experiencing happiness and grace in your middle life. You tend to be hapoy throughout your entire life although, when you will be in your middle ages, happiness and prosperity will be at par. People and your family will be wondering how you stay happy so much everytime. Your enemies might also envy you because of this feature.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sringhataka Yoga</td>
                            <td>All the planets occupy the Ascendant and its trines.</td>
                            <td>The Sringhataka Yoga in your chart hints that you will be experiencing happiness and grace in your later life. You tend to be happy throughout your entire life although, when you will be in your later ages, happiness and prosperity will be at par. People and your family will be wondering how you stay happy so much everytime. Your enemies might also envy you because of this feature.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Hala Yoga</td>
                            <td>All the planets are confined to other triangular houses.</td>
                            <td>The Hala Yoga in your birth chart speaks for the word itself. You tend to be a born agriculturist and even your family is somewhere included in the similar field. You possess all the basic knowledge that takes to become an agriculturist and you are literally born with that talent.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kamala Yoga</td>
                            <td>The planets are situated in four Kendras.</td>
                            <td>The person who will be having the Kamala Yoga in their chart will possess various kinds of attributes in their life. Firstly, they will not be much wealthy throughout their lifetime. You will be a middle-className person with basic necessities. Although, you will be commanding over ample of high prestige and honour by lots of people. Further, you will be experiencing wide fame throughout your life and people will know you mostly because of your ethics and morals. Lastly, you possess some innumerable virtues which are appreciated by many people.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vapee Yoga</td>
                            <td>The planets are ranged in the four Panarapas or the four Apoklimas.</td>
                            <td>The Vapee Yoga in your chart demonstrates that you will be making one hoarder of money. Money and wealth comes to you effortlessly and you tend to treasure it. You will never be going through any type of financial problems because of less wealth.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Samudra Yoga</td>
                            <td>All planets occupy six even houses.</td>
                            <td>The Samudra Yoga in general suggests that the native will be possessing features similar to that of the King. You tend to possess such attributes as a King and in sime cases, you are also a king. Also, you like to live your life freely without any doubts. You are not afraid of anyone and also, are not afraid of trying new things in your life. You like to live your life fearlessly and daringly.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vallaki Yoga</td>
                            <td>All planets must occupy any seven signs.</td>
                            <td>The person having the Vallaki Yoga in his/her chart indicates that that person will be a happy person. You will be having a big group and many friends will be close to you. Talking about your likings, you are very much fond of music and arts. You are likely to have a great taste in those subjects too. You are an educationally learned person and you possess the knowledge of that a higher person. Lastly, you will be gaining a lot of fame due to qualities that you possess.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Damni Yoga</td>
                            <td>All planets must occupy any six signs.</td>
                            <td>The Damni Yoga in your chart points out overall that you will be wealthy throughout your life. It is most likely that whatever you gain, you spend all of it on charity. Your nature is such that you are highly charitable. You are such a person that you love helping other people who are in need. Additionally, you tend to be a protector of the cattle.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Pasa Yoga</td>
                            <td>All planets must occupy any five signs.</td>
                            <td>The Pasa Yoga hints that you will be acquiring all of your wealth through right means. You are not one of the people that earn their wealth and riches from wrong means. For you, ethics and morals are something that are priority for you. Further speaking about your personal life, you will always be surrounded by your relatives, friends and family.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kedara Yoga</td>
                            <td>All planets must occupy any four signs.</td>
                            <td>The Kedara Yoga in your chart strongly suggests that you are one of the people who is involved in agriculture. You ear all of your livelihood and income by the means of agriculture. Further, you will become an agricultarist and your next generation will be too. Also, you are believed to help all the people that are around you in some or the other way. You are also considered to have a poor comprehensive power, which can be a disadvantage sometimes.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sula Yoga</td>
                            <td>All seven planets occupy any three signs.</td>
                            <td>The Sula Yoga in your chart indicates different kinds of attributes of your life. Firstly, you will be a person who will be devoid of wealth and prosperity. In some or the other way, it disappears from your life and there is pretty much nothing that you can do about it. You are also a courageous person who doesn't fear in taking multiple risks in their life. Your nature can seem cruel or rude sometimes by many people. Lastly, you possess various wounds and scars on your body due to any battles or similar errands.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Yuga Yoga</td>
                            <td>All seven planets occupy any two signs.</td>
                            <td>The Yuga Yoga in your chart points towards the negative aspects that you possess. You are most likely to be a poor and an indigent person. There are high chances that you do not have any savings and you ear very little. You are also the person that has been ostracised by the society. Due to some circumstances, you have been excluded from the community. Also, you are a heredical person. You are a drunkard which means that most of the times you rely on alcohol for all the reasons.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Gola Yoga</td>
                            <td>All seven planets occupy a single sign.</td>
                            <td>The Gola Yoga has very polite and innocent features in them. The show politeness to everyone see and meet, even if they are their enemies. You are very well educated, which is one of the reasons people admire you. Your post is similar to a Magistrate or someone on an equal level to him. You will be long-lived with a happy and healthy lifestyle. In terms of eating, you are very much fond of wholesome foods.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Rajju Yoga</td>
                            <td>All planets exclusively occupy movable signs</td>
                            <td>The Rajju Yoga in your birth chart indicates that you are a fun-loving person and you do not worry about the future. You love travelling and you are most likely to travel in almost each and every country possible. Considering your physical features, you are a handsome person with attractive qualities and people admire you because of this feature. You are a person that tries to find wealth in a foreign country. Lastly, your nature is a bit cruel and envious and sometimes you cannot stand the fact that someone is doing better than you.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Musala Yoga</td>
                            <td>All planets exclusively occupy fixed signs</td>
                            <td>The Musala Yoga in your chart hints that you are the type of person who endows and esteems self respect. You let nothing stand in the way of your thoughtfulness and estimation. Furthermore, you are believed to be very wealthy and prosperity throughout your life. Also, you will be having a steady mind that lets you learn without any distractions. You tend to be engaged in various works and you are most likely a hustler. Lastly, you earn a lot of fame and pride and people are very much impressed by you.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Nala Yoga</td>
                            <td>All planets exclusively occupy common signs.</td>
                            <td>The Nala Yoga suggests strongly that you are one of the deformed people. You might look different because of this feature and people might look down on you. You will be a shrewd person, however, this will only lead to great disappointments in your life. Lastly, throughout your life, your body will be entirely defected with different types of diseases.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Srik Yoga</td>
                            <td>All the benefics occupy kendras.</td>
                            <td>The Srik Yoga shows that your entire life will pass in comfort and relaxation. Your life will be one of the most luxurious livings and you have created it for yourself. You also tend to possess a lot of conveyance that draws people's attention towards you and they love you for that reason. Also, your life will be a happy one and you will be possessing many enjoyments throughout your entire life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sarpa Yoga</td>
                            <td>All the malefics occupy kendras.</td>
                            <td>The Sarpa Yoga just indicates misery and pain throughout the life. There will be no enjoyments and you will be miserable all the time. Yor nature is kind of two-faced and people do not like you for that particular reason. Also, you tend to be a stupid person and you make lots of stupid decisions too.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Duryoga</td>
                            <td>The lord of the 10th is situated in the 6th, 8th or 12th.</td>
                            <td>The Duryoga strongly recommends that you will not be exerting the fruits of your own work and you tend to punish yourself a lot. Your body tends to work a lot but you do not appreciate that at all. People tend to look down upon you in disgrace and ignominy. You are believed to be a very selfish person and you think about no one at most times. Lastly, you possess a very strong intent of deceiving others through some or the other way. You are most likely to reside in a foreign place.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>The lord of the 11th in the 6th, 8th or 12th.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Harsha Yoga</td>
                            <td>The lords of the 6th occupy the 6th.</td>
                            <td>The Harsha Yoga indicates that the native will be a lucky and fortunate person. You stay happy at all times and you are further very much invincible. Also, you are a physically strong person and people admire you for that trait. You also tend to gain a lot of fame throughout your life and you are very much afraid of doing sinful deeds.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sarala Yoga</td>
                            <td>The lords of 8th occupy the 8th.</td>
                            <td>The Sarala Yoga indicates that you will be a fearless person who is not afraid to do anything in their life. You are most likely to have a longer life than other people. You tend to be celebrated by people due to your prosperity and courage. You are also extremely learned. Further, your knowledge and courage will strike fear in the hearts of your enemies.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vimala Yoga</td>
                            <td>The lords of 12th occupy the 12th.</td>
                            <td>The Vimala Yoga in your chart demonstrates how there are various aspects of life for you. You tend to be pretty frugal about almost all the things. Be it money or relationships, you want to secure all the things. You tend to be very happy and cheerful at all the times. Furthermore, you like to be independent in all the things that you do. You don't like to be dependent on someone else for any of the errands. Lastly, you own many ennobling qualities in yourself that people get impressed by you.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sareera Soukhya Yoga</td>
                            <td>The lord of Lagna, Jupiter or Venus should occupy a quadrant.</td>
                            <td>The person having the Sareera Soukhya Yoga in their chart are considered to be the lucky ones. You are believed to have the longest life out of the lot and that to, without any major diseases. Additionally, you will be possessing lots of wealth, money and prosperity throughout your life. People will adore you only because you are wealthy. You will also be having lots of interest in poilitics.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dehapushti Yoga</td>
                            <td>The ascendant lord in a movable sign aspected by a benefic.</td>
                            <td>The Dehapushti Yoga in your chart indicates that you will be a very happy person and you try to find happiness in each and every thing around you. Talking about your physical attributes, you are one of a kind because you possess a well-developed body. Further, you tend to gain a lot of wealth in your future and you will be a wealthy person without any doubt. Lastly, you are most likely to enjoy your life without any tension and you love your life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dehakashta Yoga</td>
                            <td>The lord of Lagna must join a malefic or occupy the 8th house.</td>
                            <td>The Dehakashta Yoga in your chart indicates that you will not be comfortable enough with your body. You will always be experiencing some or the other discomforts in terms of your body. It has been mentioned that you try your level best to discard all those pains and sufferings but it is not likely to disappear.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Rogagrastha Yoga</td>
                            <td>Either the lord of the Lagna occupies the Ascendant in conjunction with the lord of 6th, 8th, or 12th, or the weak lord of Lagna joins a trine or a quadrant.</td>
                            <td>The person having the Rogagrastha Yoga in their chart points out that their constitution of body would be a very weak one. This is not something that would be there in everyone and it is considered to be pretty rare. You will be facing problems with your health and living throughout your entire life. Further, due to this problem, many issues can get created which you will need to take care of.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Krisanga Yoga</td>
                            <td>The Ascendant sign occupies a dry sign or the sign owned by a dry planet.</td>
                            <td>The Krisanga Yoga in your chart specifies that you suffer a lot physically due to the problems related to your body. You will be suffering from bodily pains throughout your life. This aspect will be such that you would not be able to get rid of it in your entire life. Also, you possess an emancipated or lean bosy which will become an obstacle for you throughout you life.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Krisanga Yoga</td>
                            <td>The Navamasa Lagna occupied by a dry planet and malefics should join the Lagnas.</td>
                            <td>The Krisanga Yoga in your chart specifies that you suffer a lot physically due to the problems related to your body. You will be suffering from bodily pains throughout your life. This aspect will be such that you would not be able to get rid of it in your entire life. Also, you possess an emancipated or lean bosy which will become an obstacle for you throughout you life.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Dehasthoulya Yoga</td>
                            <td>Lord of Lagna and the planet, in whose Navamasa the lord of Lagna is placed, should occupy watery signs.</td>
                            <td>The Dehasthoulya Yoga indicates that the native will have a stout physique. You may have a strong body, however, this is not guaranteed in this yoga. You will give an impression that you possess an unwieldy body. This does not, however, mean that your body will be strong. The most likely consequence of this yoga will be that you possess a stout physique and you will have a corpulent appearance.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Dehasthoulya Yoga</td>
                            <td>The Lagna must be occupied by Jupiter or he must aspect the Lagna from a watery sign.</td>
                            <td>The Dehasthoulya Yoga indicates that the native will have a stout physique. You may have a strong body, however, this is not guaranteed in this yoga. You will give an impression that you possess an unwieldy body. This does not, however, mean that your body will be strong. The most likely consequence of this yoga will be that you possess a stout physique and you will have a corpulent appearance.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Dehasthoulya Yoga</td>
                            <td>The Ascendant must fall in a watery sign in conjunction with benefics or the Ascendant lord must be a watery sign.</td>
                            <td>The Dehasthoulya Yoga indicates that the native will have a stout physique. You may have a strong body, however, this is not guaranteed in this yoga. You will give an impression that you possess an unwieldy body. This does not, however, mean that your body will be strong. The most likely consequence of this yoga will be that you possess a stout physique and you will have a corpulent appearance.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sada Sanchara Yoga</td>
                            <td>The lord of either the Lagna or the sign occupied by Lagna lord must be a movable sign.</td>
                            <td>The Sada Sanchara Yoga in your chart demonstrates that you are more of a wanderer kind of person. When someons is talking to you about something very important, you tend to zone out for a few minutes and get lost in your own world. Also, you love travelling to places that many people haven't visited. You are also quite fond of trying and exploring different cultures and traditions and meeting new people every day.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>The 5th from the Ascendant happen to be a sign of Venus, and Venus and Saturn are situated in the 5th and 11th respectively.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>Mercury occupies his own sign which should be in the 5th from Lagna and the Moon and Mars should be in 11th.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>Saturn should occupy his own sign which should be in the 5th from Lagna, and Mercury and Mars should be positioned in 11th.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>The Sun must occupy his 5th identical with his own sign and Jupiter and Moon should be in 11th.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>The 5th from the Lagna happens to be a house of Jupiter with Jupiter there and Mars and the Moon in the 11th.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>The Sun is in Lagna, identical with Leo, and aspected or joined by Mars and Jupiter.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>The Moon is in Lagna identical with Cancer and aspected by Jupiter and Mars.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>Mars should be in Lagna identical with Aries or Scorpio and joined or aspected by the Moon.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>Mercury should be in Lagna identical with his own sign and joined or aspected by Saturn or Venus.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>Jupiter should be in Lagna identical with his own sign and joined or aspected by Mercury and Mars.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dhana Yoga</td>
                            <td>Venus should be in Lagna identical with his own sign and joined or aspected by Saturn and Mercury.</td>
                            <td>The Dhana Yoga in your chart indicates how much amount of wealth you will be gaining throughout your life. You have seen lots of wealth since you were young and you will see a lot more until you die. You will have a luxurious living and you are not an ordinary and middle-className person. You like your things to be Royal.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bahudravyarjana Yoga</td>
                            <td>Lord of the Lagna in the 2nd, lord of the 2nd in the 11th and the lord of 11th in the Lagna.</td>
                            <td>The person having the Bajudravyarjana Yoga in his/her chart speaks particularly about the wealth they will earn and what kind of future they will make. The money and wealth that you will acquire will be only by your own luck and fortune. Not many people are capable of doing this and you will be having money for a very long time. Also, you will be having a good fortune unlike most of the people out there.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Swaveeryaddhana Yoga</td>
                            <td>The lord of Lagna, being the strongest planet, should occupy a kendra in conjunction with Jupiter and the 2nd lord should join Vaiseshikamsa.</td>
                            <td>The native possessing the Swaveeryaddhana Yoga in his chart shows that whatever prosperity you will gain throughout your life will be solely through your own hardships and efforts. You don't come from a family who's immensely rich and wealthy, but you have made your own luck and worked hard to gain wealth. You have learned to work hard and eventually create your own business. Your children will learn from you that you love to make your own luck and hardwork is really the key to success.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Swaveeryaddhana Yoga</td>
                            <td>The lord of the sign in which the lord of Navamasa occupied by the Ascendant lord is, should be strong, and join a quadrant or trine from the 2nd lord or should occupy his own or exaltation sign.</td>
                            <td>The native possessing the Swaveeryaddhana Yoga in his chart shows that whatever prosperity you will gain throughout your life will be solely through your own hardships and efforts. You don't come from a family who's immensely rich and wealthy, but you have made your own luck and worked hard to gain wealth. You have learned to work hard and eventually create your own business. Your children will learn from you that you love to make your own luck and hardwork is really the key to success.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Swaveeryaddhana Yoga</td>
                            <td>The 2nd lord should occupy a quadrant or trine from the 1st lord or the 2nd lord being a bene fic should be in either a deep exaltation or conjunction with an exalted planet.</td>
                            <td>The native possessing the Swaveeryaddhana Yoga in his chart shows that whatever prosperity you will gain throughout your life will be solely through your own hardships and efforts. You don't come from a family who's immensely rich and wealthy, but you have made your own luck and worked hard to gain wealth. You have learned to work hard and eventually create your own business. Your children will learn from you that you love to make your own luck and hardwork is really the key to success.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Madhya Vayasi Dhana Yoga</td>
                            <td>The 2nd lord possessing Kalabala must join the lords of Lagna and the 11th in a quadrant or a trine and be aspected by benefics.</td>
                            <td>The Madhya Vayasi Dhana Yoga in your chart demonstrates how you will be a self-made man/woman. Whatever wealyh you will earn, it will be solely through your passion, hardwork and efforts. When you will be educated, you will have an amazing job wherein you wouldn't have to doubt about the financial aspects. In your middle age, even you will not be able to realize how much wealth you have gathered and secured your future through it.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Anthya Vayasi Dhana Yoga</td>
                            <td>The planets owning the sign in which the lords of the 2nd and 1st together with a natural benefic are placed, should be strongly disposed in Lagna.</td>
                            <td>The Anthya Vayasi Dhana Yoga in your chart points out absolutely towards the wealth you had and will have throughout your life. You will be acquiring ample amounts of money and wealth through various forms in your life. Such circumstances will take place in your middle age that wealth will be with you no matter what. This finance will come to you suddenly when you will be entering the last page of your life. You will be experiencing this so sudden and you would not even be able to believe it initially.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Balya Dhana Yoga</td>
                            <td>Lords of the 2nd and 10th should be in a conjunction in a Kendra aspected by the lord of Navamasa occupied by the Ascendant lord.</td>
                            <td>The Balya Dhana Yoga in your chart hints that you are related to a very rich and wealthy family. Your family has been involved incredibly in an enormous business. You too, in your life will be acquiring immense fortunes and riches and you will never be one of the people who face financial matters. Especially when you will be in your early ages and will he quite young, you will be seeing lots of wealth through different aspects. This wealth will be one of your characteristics through which people will be attracted towards you.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bhratrumooladdhanaprapti Yoga</td>
                            <td>The lords of Lagna and the 2nd should join the 3rd aspected by benefics.</td>
                            <td>The Bhratrumooladdhanaprapti Yoga in your chart indicates that you tend to gain a lot of wealth in your life. You are most likely to gain money and wealth through your brothers and other relatives. Throughout your entire life, your brothers and relatives will be donating you a lot of wealth and you also accept the wealth with full grace.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bhratrumooladdhanaprapti Yoga</td>
                            <td>The lord of the 3rd should be in the 2nd with Jupiter and aspected by or conjoined with the Lord of Lagna who should have attained Vaiseshikamsa.</td>
                            <td>The Bhratrumooladdhanaprapti Yoga in your chart indicates that you tend to gain a lot of wealth in your life. You are most likely to gain money and wealth through your brothers and other relatives. Throughout your entire life, your brothers and relatives will be donating you a lot of wealth and you also accept the wealth with full grace.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Matrumooladdhana Yoga</td>
                            <td>The lord of the 2nd joins the 4th lord or is aspected by him the above yoga.</td>
                            <td>The Matrumooladdhana Yoga in your chart points that you will be earning all of your wealth and money with the sole help of your mother. In each and every financial situation that you face in your life, at the end it will only be your mother who will help you with these things. You have to make sure that don't rely on her absolutely because it would not be beneficial for you when she wouldn't be around.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Putramooladdhana Yoga</td>
                            <td>The strong lord of the 2nd is in conjunction with the 5th lord or Jupiter and the lord of Lagna is in Vaiseshikamsa.</td>
                            <td>The Putramooladdhana Yoga in your chart demonstrates that you will be earning all of your wealth just because of your sons. After you get married, you will be having multiple sons and they will be the sole reason due to which you will earn money and wealth.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Satrumooladdhana Yoga</td>
                            <td>The strong lord of the 2nd should join the lord of the 6th or Mars and the powerful lord of Lagna should be in Vaiseshikamsa.</td>
                            <td>The Satrumooladdhana Yoga in your chart points that you will be earning all of your wealth and money with the sole help of your enemies. In each and every financial situation that you face in your life, at the end it will only be your enemies who will help you with these things. You have to make sure that don't rely on your enemies absolutely because it would not be beneficial for you when they wouldn't be around.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kalatramooladdhana Yoga</td>
                            <td>The strong lord of the 2nd should join or aspected by the 7th lord and Venus and lord of Lagna should be powerful.</td>
                            <td>The Kalatramooladdhana Yoga in your chart indicates that you will be earning all of your future wealth and fame because of your wife. Your wife will turn out to be pretty lucky for you and she will bring in charms for you. You make sure to not to rely on her completely as it wouldn't be good in some circumstances.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Amaranantha Dhana Yoga</td>
                            <td>A number of planets occupy the 2nd house and the wealth giving ones are strong or occupy their own or exaltation signs.</td>
                            <td>The Amaranantha Dhana Yoga indicates that the native will have the fortune of being wealthy. You are likely to have a steady flow of money in your life. Headaches due to financial reasons is something which won't be common. Throughout your life, you will enjoy the independence of expenditure as you will rarely need to worry about money.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Ayatnadhanalabha Yoga</td>
                            <td>The lord of the Lagna and the 2nd must exchange places.</td>
                            <td>The Ayatnadhanalabha Yoga in your chart shows that you will be earning all your wealth and ability without any major efforts. You always tend to gain affluence and prosperity effortlessly. People are convinced that you work really hard to earn all of that but in reality, you don't do much to earn the wealth.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>The lords of the 12th and Lagna should exchange their positions and conjoined or br aspected by the lord of the 7th.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>The lords of the 6th and Lagna interchange their positions and the Moon is aspected by the 2nd or 7th lord.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>Kethu and the Moon should be in Lagna.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>The lord of the Lagna is in 8th aspected by or in conjunction with the 2nd or 7th lord.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>The lord of the Lagna joins the 6th, 8th and 12th with beneficial aspects or conjunctions.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>The lord of Lagna is associated with the 6th, 8th or 12th lord and subjected to malefic aspects.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>The lord of the 5th joins with the lord of 6th, 8th or 12th without beneficial aspects or conjunctions.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>The Lord of the fifth house is in the sixth or tenth aspected by Lords of the second, sixth, seventh, eighth or twelfth house.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>Natural malefics, who do not own the ninth or tenth house, occupy Lagna and associate with or is aspected by the maraka Lords.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Daridra Yoga</td>
                            <td>The Lords of the Lagna and Navamsa Lagna occupies the sixth, eighth or twelfth house and have the aspect or conjunction of the Lords of the second and seventh house.</td>
                            <td>Daridra Yoga indicates that the native has the misfortunes of being extremely poor. You will fail to accumulate wealth throughout your life even after desperately trying to acquire some. You might have extreme financial straits which will always haunt you. Your life might be full of wretchedness and miseries owing to your dire financial conditions. You will likely end up dying in poverty as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Yukthi Samanwithavagmi Yoga</td>
                            <td>The second Lord joins a benefic in a kendra or thrikona, or is exalted and combined with Jupiter.</td>
                            <td>Yukthi Samanwithavagmi Yoga indicates that you will have the gift of speaking. You will be able to talk eloquently and with vigour. You will have the ability to mesmerise people just by talking to them. You can even persuade people to do various things. You might be a skilled speaker who knows to say exactly what people wants/needs to hear. You can also be a skilled public speaker as you rarely lose your composure even if you are talking to a huge audience.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Yukthi Samanwithavagmi Yoga</td>
                            <td>The Lord of speech occupies a kendra, attains paramochha and gains Parvatamsa, while Jupiter or Venus is in Simhasanamsa.</td>
                            <td>Yukthi Samanwithavagmi Yoga indicates that you will have the gift of speaking. You will be able to talk eloquently and with vigour. You will have the ability to mesmerise people just by talking to them. You can even persuade people to do various things. You might be a skilled speaker who knows to say exactly what people wants/needs to hear. You can also be a skilled public speaker as you rarely lose your composure even if you are talking to a huge audience.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Parihasaka Yoga</td>
                            <td>The Lord of Navamsa occupied by the Sun attains Vaiseshikamsa and joins the second house.</td>
                            <td>Parihasaka Yoga indicates that the native has a great sense of humour. You tend to be quite a jolly person who can see the humour in trivial things. You are never vindictive and rarely ever hold a grudge against anybody. You will have a good temperament. Further, you will attract people towards you through your humour and wittiness. You will be extremely witty when you speak as well.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Asatyavadi Yoga</td>
                            <td>The Lord of the second house occupies the house of Saturn or Mars and malefics join kendras and thrikonas.</td>
                            <td>Asatyavadi Yoga indicates that the native might have a bad reputation. It is possible that you will have the tendency to bluff and flaunt even if you have nothing to flaunt about. You will make up things out of thin air and try to convince people to believe in the things that you say. You might be a blatant and chronic liar and might fail to stop yourself from lying. You might also be forced to lie to get away from serious threats. No matter what the reason might be, you might turn out to be a liar.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Jada Yoga</td>
                            <td>The Lord of the second house is posited in the tenth house with malefics or the second house is joined by the Sun and Mandi.</td>
                            <td>Jada Yoga indicates that you struggle to keep your composure under pressure. You might have bad stage fright and can rarely talk in front of a large audience. You tend to get nervous in public assemblies and fail to make your point properly, despite being an eloquent person in general. You will rarely have the balance and composure that you otherwise have when you become aware of the fact that a large number of people are looking or listening to you.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bhaskara Yoga</td>
                            <td>Mercury in the second house from the Sun, the Moon in the eleventh house from Mercury and Jupiter in the fifth or ninth house from the Moon.</td>
                            <td>Bhaskara Yoga indicates that the native will be extremely wealthy. You will also be valorous and not shy away from taking risks. However, you are not stupid to take all kinds of risks. In terms of your personality, you are aristocratic. Nevertheless, you are known to have a good personality. You are also quite learned, especially in religious scripts or Sastras. You are also interested in a host of other things and you take your time to become learned in things like astrology and music.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Marud Yoga</td>
                            <td>Jupiter in fifth or ninth house from Venus, the Moon in the fifth house from Jupiter and the Sun in a kendra from the Moon.</td>
                            <td>Marud Yoga indicates that the native will be extremely good at making conversations. You will be able to make engaging conversations with almost anyone. In terms of personality, you will be quite generous and kind. You will be extremely rich as well and you will rarely hesitate to spend your money to help someone in need. You will also be a successful businessman. You will have the influence equivalent to that of a king. When it comes to your appearance, you are likely to have a protruding belly.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Saraswathi Yoga</td>
                            <td>Jupiter, Venus and Mercury occupy Lagna, second, fourth, fifth, seventh, ninth or tenth house either jointly or severally, Jupiter being in his own, exaltation or friendly sign.</td>
                            <td>Saraswathi Yoga indicates that the native is extremely learned. You will have the creative mind of a poet and you will be famous for it. Your popularity will also grow because of your knowledge. You will be quite learned in all fields of sciences and you will also be skilled in whatever you do. Your skills will bring you a good deal of wealth as well. Further, you will be revered by people. In terms of your family, you will find yourself a good wife and have children with her.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Budha Yoga</td>
                            <td>Jupiter in Lagna, the Moon in a kendra, Rahu in the second house from the Moon and the Sun and Mars in the third house from Rahu.</td>
                            <td>Budha Yoga indicates that you will have a comfortable life and might even live a life that is equivalent to that of a king. You will experience kingly comforts in your life. Not only will you enjoy the luxury and poshness of a king but also have power that is comparable to that of a king. Further, you will also be famous, owing to your intelligence and knowledge of sciences. Other than that, you might be aristocratic in nature but have no enemies.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Mooka Yoga</td>
                            <td>The second Lord joins the eighth with Jupiter.</td>
                            <td>Mooka Yoga indicates that the native might go through some unpleasant experiences in their lives and lose their ability to talk. You are extremely likely to not be able to talk because of an accident. It is also possible that you are born dumb. However, the former is more likely. Another reason for your inability to speak might come from trauma from an excruciating experience.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Netranasa Yoga</td>
                            <td>The Lords of the tenth and sixth house occupy Lagna with the second Lord, or they are in Neechamsa.</td>
                            <td>Netranasa Yoga indicates that you might suffer from problems or go through some unpleasant experiences which will create problems in your life, especially when it comes to your eyes. You might find yourself in trouble and the ruler of your community or nation, etc might want to make you blind. Even if you do not lose your eyesight because of the displeasure of a ruler, you might naturally go blind at some point in your life. This can also happen from an accident.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Andha Yoga</td>
                            <td>Mercury and the Moon is in the second or the Lords of Lagna and the second join the second house with the Sun.</td>
                            <td>Andha Yoga indicates that you will have problems related to your eyesight. If you are unfortunate, you might even be born blind. This can make things difficult for you. If you are slightly less unfortunate, you might have night-blindness. You will struggle to see things when things are not well lit and might not be able to see entirely when night falls. Such peculiarities might create some unique problems and experiences in your life.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sumukha Yoga</td>
                            <td>The Lord of the second house is in a kendra aspected by benefics, or benefics join the second house.</td>
                            <td>Sumukha Yoga indicates that the native will have an attractive face and an incredibly beautiful smile. You might be well known among your friends and peers just for your beauty alone. Your smiling face will be something that people likes to see whenever they can. However, if your natal chart has the second lord and the second house afflicted, you might have a harsh voice and/or defective eyesight. Nevertheless, this is not very likely.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sumukha Yoga</td>
                            <td>T'he Lord of the second house is posited in a kendra which is his exaltation, own or friendly sign and the Lord of the kendra attains Gopuramsa.</td>
                            <td>Sumukha Yoga indicates that the native will have an attractive face and an incredibly beautiful smile. You might be well known among your friends and peers just for your beauty alone. Your smiling face will be something that people likes to see whenever they can. However, if your natal chart has the second lord and the second house afflicted, you might have a harsh voice and/or defective eyesight. Nevertheless, this is not very likely.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Durmukha Yoga</td>
                            <td>Malefics occupies the second and its Lord joins an evil planet or is in debilitation.</td>
                            <td>Durmukha Yoga indicates that you might not have a very attractive face. Your beauty, or the lack of it, can be in your life from your birth. However, it can also be due to some external factors later in your life. You might find yourself in an accident which will leave scars on your face or leave your face disfigured. Further, you will also have an irritable personality. You tend to get angry extremely quickly.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Durmukha Yoga</td>
                            <td>The Lord of the second house being evil, joins Gulika or occupies unfriendly and debilitated Navamsa with malefics.</td>
                            <td>Durmukha Yoga indicates that you might not have a very attractive face. Your beauty, or the lack of it, can be in your life from your birth. However, it can also be due to some external factors later in your life. You might find yourself in an accident which will leave scars on your face or leave your face disfigured. Further, you will also have an irritable personality. You tend to get angry extremely quickly.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bhojana Soukhya Yoga</td>
                            <td>The powerful Lord of the second house occupies Vaiseshikamsa and have the aspect of Jupiter or Venus.</td>
                            <td>Bhojana Soukhya Yoga indicates that you will be blessed with incredible success in your life. You will rarely have any difficulty when it comes to wealth and finance. There will always be good food at your table and you will probably never have to worry about food in your life. Not only will you have enough to feed yourself but you will also have more than enough to help others as well. You are likely to have a lavish life, especially when it comes to food.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Annadana Yoga</td>
                            <td>The Lord of the second house joins Vaiseshikamsa and is in conjunction with or aspected by Jupiter and Mercury.</td>
                            <td>Annadana Yoga indicates that you will have decent independence in your life in terms of finance and you will also have a generous heart. You tend to be extremely empathetic. You are always ready to help others and never fail to be hospitable even to those people who are often ostracised in society. You will make sure that the people around you are well fed and never have to starve. It might not be much of an exaggeration to say that you will epitomise charity and hospitability.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Parannabhojana Yoga</td>
                            <td>The Lord of the second house is in debilitation or in unfriendly navamsas and aspected by a debilitated planet.</td>
                            <td>Parannabhojana Yoga indicates that the native will have little to no financial independence in their life. You will struggle to make your ends meet daily. Most of the time you find yourself being at the mercy of someone else to even have something to eat. You will tend to ask for food from others and will be hugely dependent on the charity of other people. You might even have to live off of food that had been doled out by others.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sraddhannabhuktha Yoga</td>
                            <td>Saturn owns the second house, or joins the second Lord. or the second house is aspected by debilitated Saturn.</td>
                            <td>Sraddhannabhuktha Yoga indicates that the native has the misfortune of eating food prepared at the time of obsequies. It is generally considered to be a great misfortune by most communities to eat the food during the death ceremony if you are not one of the relatives of the deceased. This social stigma might not mean much to you. Nevertheless, you are likely to experience some sort of discomfort from this.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sarpaganda Yoga</td>
                            <td>Rahu joins the second house with Mandi.</td>
                            <td>Sarpaganda Yoga indicates that the native has a high chance of getting bit by a snake. While you might get bitten by any kind of snake, chances are that the snake will be a cobra. Even though other people will move around carelessly near a snake, you will find that they might not get bitten. However, when it comes to you, despite your precautions and your vigilance, you might get bitten by a snake out of nowhere.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Vakchalana Yoga</td>
                            <td>A maleflc owns the second house, joins a cruel navamsa and the second house is devoid of benefic aspect or association.</td>
                            <td>Vakchalana Yoga indicates that the native has difficulties related to speech. It is highly possible that you will turn out to be a stammerer. This will hinder your progress in terms of your career on many occasions, throughout your life. Stammering makes it difficult for you to express yourself adequately and you might often fail to impress your point upon others, leaving you at a huge disadvantage, especially in roles that require communication and leadership qualities.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>VishapraYoga Yoga</td>
                            <td>The second house is joined and aspected by malefics and the second Lord is in a cruel navamsa aspected by a malefic.</td>
                            <td>VishapraYoga Yoga indicates that you will have the misfortune of something heinous. Your actions might provoke people even though you do not tend to harm or degrade anybody. People might also envy your success and your prosperity and try to pull you down. However, the ultimate misfortune will be that you will be poisoned by others in an attempt to pull you down once and for all.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bhratruvriddhi Yoga</td>
                            <td>The third Lord, or Mars, or the third house are joined or aspected by benefics or strong.</td>
                            <td>Bhratruvriddhi Yoga indicates that you will be extremely happy in your life. This happiness will come from your family. Your family will have strong bonds and you will be lucky to have great relationships with your siblings. Further, your brothers will bring you great joy and happiness as they go on to succeed in their life and bring prosperity not only to themselves but to the entire family as well.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sodaranasa Yoga</td>
                            <td>Mars and the third Lord occupies the eighth (third, fifth or seventh) house and are aspected by malefic.</td>
                            <td>Sodaranasa Yoga indicates that you will be the sole son/daughter of your parents. You will be unfortunate to not have the happiness of having siblings. Usually, people who have a brother or a sister to grow up with have great memories to cherish later on in their lives. However, you will be devoid of such experience. Nevertheless, you will find happiness in other things and have other memories to cherish in your life.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Ekabhagini Yoga</td>
                            <td>Mercury, the Lord of the third house, and Mars join the third house, the Moon and Saturn respectively.</td>
                            <td>Ekabhagini Yoga indicates that you will be blessed with a sister. Your parents might have you or your sister first. Regardless of who the younger one is, you will have the experience of growing up with a lovely sister who will make your life easier for the most part. There is a chance for them to be moody and selfish but it is not guaranteed. Your experiences and your memories with your sister will most likely be quite pleasant.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dwadasa Sahodara Yoga</td>
                            <td>The third Lord is in a kendra and exalted Mars joins Jupiter in a thrikona from the third Lord.</td>
                            <td>Dwadasa Sahodara Yoga indicates that you will be blessed with a big family. Depending upon your horoscope and natal chart, you can have several siblings with whom you grow up. This Yoga further indicates that you will be the third sibling out of the twelve brothers and/or sisters that you will have. The huge number of children in a family will come with various benefits. However, if you are not careful, things might have a negative impact on your personal life.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Sapthasankhya Sahodara Yoga</td>
                            <td>Lord of the twelfth house joins Mars, and the Moon is in the third with Jupiter, devoid of association with or aspect of Venus.</td>
                            <td>Sapthasankhya Sahodara Yoga indicates that the native will enjoy the company of a lot of siblings. You will likely have seven brothers. Fortunately, the bond that you all will share among yourselves will be pretty strong. It is likely that most of you will have great success in your lives and bring prosperity to not only yourselves but also your family. The best thing about this Yoga is that you will enjoy a prosperous relationship between family members with a diverse set of interests.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Parakrama Yoga</td>
                            <td>The Lord of the third house joins a benefic navamsa being aspected by (or conjoined with) benefic planets, and Mars occupies benefic signs.</td>
                            <td>Parakrama Yoga indicates that the native will be extremely brave in their lives. You will have the heart of a lion. People might try to harm or discourage you in your life or your career. However, when you make up your mind, you never back down. Despite this, you are not stubborn. You know when or if you should back down from something. You dare to do the right things, to protect and step up for people and your beliefs. Nevertheless, you should be careful, lest you find yourself being courageous in the wrong field.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Yuddha Praveena Yoga</td>
                            <td>The Lord of the navamsa joined by the planet that owns the navamsa in which the third Lord is placed, joins its own vargas.</td>
                            <td>Yuddha Praveena Yoga indicates that you will possess a sound mind. Your intellect is something that people respects. You will be able to deduct and plan things precisely. Further, you might even find yourself in the role of a war strategist. You might even become a specialist in this field. Your intelligence and sound judgement will be great assets to you and the people around you.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Yuddhatpoorvadridhachitta Yoga</td>
                            <td>The exalted Lord of the third house joins malefics in movable Rasis or Navamsas.</td>
                            <td>Yuddhatpoorvadridhachitta Yoga indicates that you will be considered incredibly courageous until your courage is needed. However, this yoga also suggests that it is only until you actively participate in a war that you show courage but as soon as you get into the actual action, you lose your balance of mind, become funky and make an ignominious retreat. People will think you are courageous until you prove them otherwise.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Yuddhatpaschaddrudha Yoga</td>
                            <td>The Lord of the third house occupies a fixed Rasi, a fixed Navamsa and a cruel Shahtiamsa, and the Lord of the Rasi so occupied is in debility.</td>
                            <td>Yuddhatpaschaddrudha Yoga indicates that you will have true courage. Even though people might not consider you to be a courageous person, you will prove them otherwise when the time comes. Even you might find it astonishing to learn that you are braver than you had imagined yourself to be. You are afraid to join the military and fight in the war. However, once you find yourself on the battlefield, you become incredibly courageous.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Satkathadisravana Yoga</td>
                            <td>The third house is a benefic sign aspected by benefic planets and the third Lord joins a benefic amsa.</td>
                            <td>Satkathadisravana Yoga indicates that the native will have the mindset of a scholar. You will tend to find yourself immersed in books of great value in terms of the knowledge that they impart. You will be extremely interested in reading literature of great stature. Not only will you read books, but you will also listen to discourses related to religion and other things such as politics, philosophy, etc.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Uttama Griha Yoga</td>
                            <td>The Lord of the fourth house joins benefics in a kendra or thrikona.</td>
                            <td>Uttama Griha Yoga indicates that you will possess a good house. Possession of a good house means plenty of positive things for the native. It often results in finding great fortune and the accumulation of tremendous wealth. You will also have success and prosperity in your life. Further, if you put in the effort, you will have a great career as well. Your fortune will also be quite good, owing to your good house.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vichitra Saudha Prakara Yoga</td>
                            <td>The Lords of the fourth and tenth are conjoined together with Saturn and Mars.</td>
                            <td>Vichitra Saudha Prakara Yoga indicates that you will be blessed with a decent amount of wealth. You might even be incredibly wealthy depending upon your efforts and your natal chart. At the least, you will own two mansions. It is unlikely for you to have difficulties in your life due to the lack of resources, especially money. You might also have some luck investing in real estate.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Ayatna Griha Prapta Yoga</td>
                            <td>Lords of Lagna and the seventh house occupies Lagna or the fourth house, aspected by benefics.</td>
                            <td>Ayatna Griha Prapta Yoga indicates that you will enjoy the inflow of money or wealth without having to work too hard for it. This can also mean that you will be born with a silver spoon in your mouth. This might also mean that you are extremely fortunate when it comes to wealth. Regardless, you will acquire a substantial amount of property throughout your life. You will own properties especially in the form of real estate which you will come to your possession without much effort.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Ayatna Griha Prapta Yoga</td>
                            <td>The Lord of the ninth is posited in a kendra and the Lord of the fourth is in exaltation, moolathrikona or own house.</td>
                            <td>Ayatna Griha Prapta Yoga indicates that you will enjoy the inflow of money or wealth without having to work too hard for it. This can also mean that you will be born with a silver spoon in your mouth. This might also mean that you are extremely fortunate when it comes to wealth. Regardless, you will acquire a substantial amount of property throughout your life. You will own properties especially in the form of real estate which you will come to your possession without much effort.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Grihanasa Yoga</td>
                            <td>The Lord of the fourth is in the twelfth house aspected by a malefic.</td>
                            <td>Grihanasa Yoga indicates that the native will suffer tremendous loss concerning real estate. You might have a decent amount of wealth with you and you might invest your wealth in houses. However, this will lead to a great loss. You are likely to lose all your houses in your life to some misfortune. You might experience just one misfortune that will be bad enough to sweep off all your houses at once, or you might also experience a series of misfortunes that will push you to the same situation.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Grihanasa Yoga</td>
                            <td>The Lord of the navamsa occupied by the Lord of the fourth is disposed in the eleventh house.</td>
                            <td>Grihanasa Yoga indicates that the native will suffer tremendous loss concerning real estate. You might have a decent amount of wealth with you and you might invest your wealth in houses. However, this will lead to a great loss. You are likely to lose all your houses in your life to some misfortune. You might experience just one misfortune that will be bad enough to sweep off all your houses at once, or you might also experience a series of misfortunes that will push you to the same situation.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bandhu Pujya Yoga</td>
                            <td>The benefic Lord of the fourth is aspected by another benefic and Mercury is situated in Lagna.</td>
                            <td>Bandhu Pujya Yoga indicates that you are someone who has a good reputation among your friends and family. You will be respected and adored by the people around you due to your great personality. You may show incredible gestures of love and empathy when the going gets tough. You are someone upon whom people can place their faith and let their guard down. However, it must be mentioned here that you are more revered by the people around you than you are loved, even though the distinction isn’t quite apparent.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bandhu Pujya Yoga</td>
                            <td>The fourth house or the fourth Lord has the association or aspect of Jupiter.</td>
                            <td>Bandhu Pujya Yoga indicates that you are someone who has a good reputation among your friends and family. You will be respected and adored by the people around you due to your great personality. You may show incredible gestures of love and empathy when the going gets tough. You are someone upon whom people can place their faith and let their guard down. However, it must be mentioned here that you are more loved by the people around you than you are revered.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bandhubhisthyaktha Yoga</td>
                            <td>The fourth Lord is associated with malefics or occupies evil shashtiamsas or joins inimical or debilitation signs.</td>
                            <td>Bandhubhisthyaktha Yoga indicates that people will desert you when you need them the most. You may be misunderstood and therefore mistreated by others through no fault of yours. Things might get difficult for you sometimes as you end up displeasing or annoying people without your intention. You will even be misunderstood by your friends and your family. Your associates and your relatives might never try to understand you as well.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Matrudeerghayur Yoga</td>
                            <td>A benefic occupies the fourth, the fourth Lord is exalted, and the Moon is strong.</td>
                            <td>Matrudeerghayur Yoga indicates that you will be blessed with your mother’s company for a long time. Your mother will live a very long life. It is possible that she may even outlive you. This longevity can bring stability to your life. You might even feel like coming home to your mother every once in a while and have a somewhat stress free life. However, if your mother is not kind, you might have to deal with her for quite some time.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Matrudeerghayur Yoga</td>
                            <td>The Lord of the navamsa occupied by the fourth Lord is strong and occupy a kendra from Lagna as well as Chandra Lagna.</td>
                            <td>Matrudeerghayur Yoga indicates that you will be blessed with your mother’s company for a long time. Your mother will live a very long life. It is possible that she may even outlive you. This longevity can bring stability to your life. You might even feel like coming home to your mother every once in a while and have a somewhat stress free life. However, if your mother is not kind, you might have to deal with her for quite some time.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Matrunasa Yoga</td>
                            <td>The Moon is hemmed in between, associated with or aspected by evil planets.</td>
                            <td>Matrunasa Yoga indicates that you will have the misfortune of losing your mother quite early in your life. The time of your mother’s death depends a lot on your natal chart. Depending on that, your mother might even die while giving you birth. In other cases, she will die a few months or years after your birth. You can have a difficult childhood due to this as you might need to grow up without the love and warmth of a mother.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Matrunasa Yoga</td>
                            <td>The planet owning the navamsa, in which the Lord of the navamsa occupied by the fourth Lord is situated is disposed in the sixth, eighth or twelfth house.</td>
                            <td>Matrunasa Yoga indicates that you will have the misfortune of losing your mother quite early in your life. The time of your mother’s death depends a lot on your natal chart. Depending on that, your mother might even die while giving you birth. In other cases, she will die a few months or years after your birth. You can have a difficult childhood due to this as you might need to grow up without the love and warmth of a mother.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Matrugami Yoga</td>
                            <td>The Moon or Venus joins a kendra in conjunction with or aspected by a malefic, and an evil planet occupies the fourth house.</td>
                            <td>Matrunasa Yoga indicates that you will have the misfortune of losing your mother quite early in your life. The time of your mother’s death depends a lot on your natal chart. Depending on that, your mother might even die while giving you birth. In other cases, she will die a few months or years after your birth. You can have a difficult childhood due to this as you might need to grow up without the love and warmth of a mother.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sahodareesangama Yoga</td>
                            <td>The Lord of the seventh house and Venus are in conjunction in the fourth house and are aspected by or associated with malefics or are in cruel shashtiamsas.</td>
                            <td>Sahodareesangama Yoga indicates that the native commits heinous sins just for the sake of the gratification of their bestial instincts. You will have an unhealthy amount of interest in sexual activities and might end up targeting your family members to have sexual relationships with. You might even be guilty of having intercourse with your own sister.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Kapata Yoga</td>
                            <td>The fourth house is joined by a malefic and the fourth Lord is associated with or aspected by malefics or is hemmed in between malefic.</td>
                            <td>Kapata Yoga indicates that you have an extremely diplomatic approach to everything in your life. This diplomacy might lead you into some dignified hypocrisy. However, it is also possible that you practice undignified hypocrisy as well. You will tend to not follow what you strongly preach and only act as if you stand for it. You might also look down upon others and act as if you are better than everybody.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Kapata Yoga</td>
                            <td>The fourth house is occupied by Sani, Kuja, Rahu and the malefic tenth Lord, who in turn is aspected by malefics.</td>
                            <td>Kapata Yoga indicates that you may tend to look down upon others and have an extremely diplomatic approach to everything in your life. This diplomacy might lead you into some dignified hypocrisy. However, it is also possible that you practice undignified hypocrisy as well. You will tend to not follow what you strongly preach and only act as if you stand for it. The instructions that you ask others to follow might be completely absent from life.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Kapata Yoga</td>
                            <td>The fourth Lord joins Saturn, Mandi and Rahu and is aspected by malefics.</td>
                            <td>Kapata Yoga indicates that you have an extremely diplomatic approach to everything in your life. This diplomacy might lead you into some dignified hypocrisy. However, it is also possible that you practice undignified hypocrisy as well. You will tend to not follow what you strongly preach and only act as if you stand for it. You might also look down upon others and act as if you are better than everybody.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Nishkapata Yoga</td>
                            <td>The fourth house is occupied by a benefic, or a planet in exaltation, friendly or own house, or the fourth house is a benefic sign.</td>
                            <td>Nishkapata Yoga indicates that you will be someone who has a pure heart. You are a loving person and either consider everyone as equals or put them above you with immense respect. You hate it when people are being a hypocrite and do not follow what they preach. You also hate it when they act all high and mighty or self-righteous. Further, you also abhor secrecy and want things to be out in the open so that there is no betrayal or cheating.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Nishkapata Yoga</td>
                            <td>Lord of Lagna joins the fourth house in conjunction with or aspected by a benefic or occupy Parvata or Uttamamsa.</td>
                            <td>Nishkapata Yoga indicates that you will be someone who has a pure heart. You are a loving person and either consider everyone as equals or put them above you with immense respect. You hate it when people are being a hypocrite and do not follow what they preach. You also hate it when they act all high and mighty or self-righteous. Further, you also abhor secrecy and want things to be out in the open so that there is no betrayal or cheating.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Matru Satrutwa Yoga</td>
                            <td>Mercury, being the Lord of Lagna and the fourth house, must join with or be aspected by a malefic.</td>
                            <td>Matru Satrutwa Yoga indicates that the native has strong negative feelings against their mother. This might come off from negative experiences with your parents or from misunderstandings that were never cleared on time or adequately. However, it is possible that your mother loves you with all her heart and despite this, you fail to see the good in her. It is unlikely for a cordial relationship to exist between you two.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Matru Sneha Yoga</td>
                            <td>The first and fourth house have a common Lord, or the Lords of the first and fourth house must be temporal or natural friends or aspected by benefics.</td>
                            <td>Matru Sneha Yoga indicates that you and your mother will have a very healthy and cordial relationship with each other. You both will adore each other and care for one another. It is also possible that you and your mother’s relationship will be almost ideal. Noticing all the little and big things that your mother does for you, you will develop immense respect for her. You will further put in all your effort into making her happy which will further strengthen this relationship.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vahana Yoga</td>
                            <td>The Lord of Lagna joins the fourth, eleventh or the ninth house.</td>
                            <td>Vahana Yoga indicates that the native will acquire material comforts and conveyances. You will own vehicles that can range from a bicycle to luxury automobiles depending upon the strength of your horoscope and natal chart. Bicycles and automobiles fit into the modern world quite well which is why these things are more likely to be in your possession. Nevertheless, you might also own horse carriages. Further, the number of vehicles you own also depends upon your natal chart.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Vahana Yoga</td>
                            <td>The fourth Lord is exalted and the Lord of the exaltation sign occupies a kendra or trikona.</td>
                            <td>Vahana Yoga indicates that the native will acquire material comforts and conveyances. You will own vehicles that can range from a bicycle to luxury automobiles depending upon the strength of your horoscope and natal chart. Bicycles and automobiles fit into the modern world quite well which is why these things are more likely to be in your possession. Nevertheless, you might also own horse carriages. Further, the number of vehicles you own also depends upon your natal chart.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Anapathya Yoga</td>
                            <td>Jupiter, the Lords of Lagna, the seventh and the fifth houses are weak.</td>
                            <td>Anapathya Yoga indicates that you will not be blessed with children. You will have some problems in trying to procreate and will most likely have no children. It is only if Jupiter and the fifth Lord is strong in your natal chart, that this Yoga will get modified to some extent. This will increase the chance of you being able to have children. Further, the people in your community might look down upon you if you are unable to have children.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sarpasapa Yoga</td>
                            <td>The fifth house is occupied by Rahu and aspected by Kuja, or the fifth house being a sign of Mars, is occupied by Rahu.</td>
                            <td>Sarpasapa Yoga indicates that you will have the misfortune of losing your children. It is highly probable that your children’s death will come from accidents related to serpents. It is important you keep your children away from snakes. Unfortunately, however, all your efforts at safeguarding your children might come to nothing. It is also possible that you will lose your children before birth and thus have stillbirths due to the curse of serpents and not because of a snake bite.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sarpasapa Yoga</td>
                            <td>The fifth Lord is in conjunction with Rahu, and Saturn is in the fifth house aspected by or asssociated with the Moon.</td>
                            <td>Sarpasapa Yoga indicates that you will have the misfortune of losing your children. It is highly probable that your children’s death will come from accidents related to serpents. It is important you keep your children away from snakes. Unfortunately, however, all your efforts at safeguarding your children might come to nothing. It is also possible that you will lose your children before birth and thus have stillbirths due to the curse of serpents and not because of a snake bite.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sarpasapa Yoga</td>
                            <td>The karaka of children in association with Mars, Rahu in Lagna, and the fifth Lord in a dusthana.</td>
                            <td>Sarpasapa Yoga indicates that you will have the misfortune of losing your children. It is highly probable that your children’s death will come from accidents related to serpents. It is important you keep your children away from snakes. Unfortunately, however, all your efforts at safeguarding your children might come to nothing. It is also possible that you will lose your children before birth and thus have stillbirths due to the curse of serpents and not because of a snake bite.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sarpasapa Yoga</td>
                            <td>The fifth house, being a sign of Mars, is conjoined by Rahu and aspected by or associated with Mercury.</td>
                            <td>Sarpasapa Yoga indicates that you will have the misfortune of losing your children. It is highly probable that your children’s death will come from accidents related to serpents. It is important you keep your children away from snakes. Unfortunately, however, all your efforts at safeguarding your children might come to nothing. It is also possible that you will lose your children before birth and thus have stillbirths due to the curse of serpents and not because of a snake bite.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Pitrusapa Sutakshaya Yoga</td>
                            <td>The Sun occupies the fifth house which is in his place of debilitation, or the amsas of Makara and Kumbha, or in between malefics.</td>
                            <td>Pitrusapa Sutakshaya Yoga indicates that you will face various difficulties in your life. Most of your problems will come on account of your father’s wrath. Your father will have a difficult time controlling their anger and this will have huge negative repercussions in your life. You might even lose your children because of your father’s temper which will be the biggest blow to your life.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Matrusapa Sutakshaya Yoga</td>
                            <td>The eighth Lord is in the fifth house, the fifth Lord is in the eighth and the Moon and the fourth Lord join the sixth.</td>
                            <td>Matrusapa Sutakshaya Yoga indicates that you will experience the loss of your children. This unfortunate experience might come due to many natural reasons. However, it is most likely that you will lose your children due to the curse of your spouse. It is especially true if you are a man. The power of the curse of a mother is extremely strong and you might not be able to do anything to prevent it. If you are the mother yourself, you mustn't lose your temper and do something that you might regret in the future.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bhratrusapa Sutakshaya Yoga</td>
                            <td>The Lords of Lagna and the fifth house joins the eighth and the Lord of the thirrd house combines with Mars and Rahu in the fifth house.</td>
                            <td>Bhratrusapa Sutakshaya Yoga indicates that you will experience the loss of your children. This unfortunate experience might come due to many natural reasons. However, it is most likely that you will lose your children due to the curse of your brothers. It is unlikely that your brothers will be physically responsible for your children’s death but it is always better to remain vigilant and careful. Further, you must maintain a good relationship with your brother.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Pretasapa Yoga</td>
                            <td>The Sun and Saturn in the fifth house, weak Moon in the seventh house, Rahu in Lagna and Jupiter in the twelfth house.</td>
                            <td>Pretasapa Yoga indicates that you will experience the loss of your children. This unfortunate experience might come due to many natural reasons. However, it is most likely that you will lose your children due to the curses of Pretas or manes of the dead. Since this Yoga comes with a weak Moon, the chances of your children getting cursed by Pretas increases significantly. A weak Moon is subjected to a series of afflictions and the Moon-Rahu-Saturn connection, in any form, is always indicative of the influences of what is generally known as devils, spirits, ghosts and other destructive denizens.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bahuputra Yoga</td>
                            <td>Rahu is in the fifth house, in a Navamsa other than that of Saturn.</td>
                            <td>Bahuputra Yoga indicates that you will be blessed with a lot of children. You and your spouse will enjoy a very healthy sexual relationship which will result in frequent sexual activities. The sexual organs of both of you are also healthy which will enable you to have more than one child. It is, however, important that you have proper family planning and not overburden yourself with responsibilities.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bahuputra Yoga</td>
                            <td>The Lord of the Navamsa occupied by a planet that is in association with the seventh Lord, is in the first, second or fifth house.</td>
                            <td>Bahuputra Yoga indicates that you will be blessed with a lot of children. You and your spouse will enjoy a very healthy sexual relationship which will result in frequent sexual activities. The sexual organs of both of you are also healthy which will enable you to have more than one child. It is, however, important that you have proper family planning and not overburden yourself with responsibilities.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Dattaputra Yoga</td>
                            <td>Mars and Saturn occupies the fifth house and the Lord of Lagna is in a sign of Mercury, aspected by or in association with the same planet</td>
                            <td>Dattaputra Yoga indicates that you will have trouble having children. This unfortunate experience will be shared with your spouse as you two struggle in this regard. The husband will likely have problems in their reproductive power, however, it is not guaranteed and both husband and wife can have problems. Regardless of your inability to have children, you will adopt one or more children which is the highlight of this Yoga.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Dattaputra Yoga</td>
                            <td>The Lord of the seventh house is posited in the eleventh. The fifth Lord joins a benefic and the fifth house is occupied by Mars or Saturn.</td>
                            <td>Dattaputra Yoga indicates that you will have trouble having children. This unfortunate experience will be shared with your spouse as you two struggle in this regard. The husband will likely have problems in their reproductive power, however, it is not guaranteed and both husband and wife can have problems. Regardless of your inability to have children, you will adopt one or more children which is the highlight of this Yoga.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Aputra Yoga</td>
                            <td>The Lord of the fifth house occupies a dusthana.</td>
                            <td>Aputra Yoga indicates that you will not have the misfortune of not having children in your life. You and your spouse will not have the ability to reproduce despite various efforts and sacrifices. It is unlikely that you will have children and lose them, be it as stillbirths or early deaths. Instead, there will be no children whatsoever. This can be due to various problems in your sexual organs. However, it cannot be said that you will be unhealthy in any other aspect of your body.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Ekaputra Yoga</td>
                            <td>Lord of the fifth house joins a kendra or trikona.</td>
                            <td>Ekaputra Yoga indicates that the native will be blessed with one child. Your child will most likely be a boy. It must be understood here that you will have only a son in your life. It is likely that you will not be able to have more than one child. It is also possible that you will simply not try to have more than children as you or your spouse is content with having just one child. Nevertheless, if you do have more than one child, you might end up losing them.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Suputra Yoga</td>
                            <td>Jupiter is the Lord of the fifth house and the Sun is occupying a favourable position.</td>
                            <td>Suputra Yoga indicates that you will be blessed with a son who will be worthy of your love and affection. Further, it might so happen that the thing that you wish for whole-heartedly will become true. However, this thing can go on to become a source of pain in your life. When the Lord of the fifth house or the fifth house itself has several benefic Vargas, the son will be a beacon of light to your family.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Kalanirdesat Putra Yoga</td>
                            <td>Jupiter is in the fifth house and the Lord of the fifth joins Venus.</td>
                            <td>Kalanirdesat Putra Yoga indicates that you will be blessed with a son in either your 32nd or your 33rd year. If Jupiter is in the fifth house and Venus is in conjunction with the fifth Lord, the birth of a son in your 32nd or 33rd year is incredibly likely. However, this will only happen if the appropriate directional influences operate at the time the native reaches the above age. Failing to meet this condition will render this Yoga invalid.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kalanirdesat Putra Yoga</td>
                            <td>Jupiter is occupying the ninth house from Lagna and Venus is in the ninth house from Jupiter, in conjunction with the Lord of Lagna.</td>
                            <td>Kalanirdesat Putra Yoga indicates that you will be blessed with a son in your 40th year. If Jupiter is in the ninth house from Lagna and Venus is in the ninth house from Jupiter, the birth of a son in your 40th year is incredibly likely. However, this will only happen if Venus is in the fifth house from Lagna. Further, the appropriate Dasa and Bhukthi must be current as well. Failing to meet this condition will render this Yoga invalid.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Kalanirdesat Putranasa Yoga</td>
                            <td>Rahu is occupying the fifth house, the Lord of the fifth is in conjunction with a malefic and Jupiter is debilitated.</td>
                            <td>Kalanirdesat Putranasa Yoga indicates that you will lose someone who is extremely dear to you in your 32nd year. The likelihood of your son being the person whom you lose is extremely high during this Yoga. However, this will only happen if all the three factors bearing on the house of children, viz., the house, the Lord and the karaka have some sort of affliction. Unfortunately, this Yoga has been found to give rise to more serious effects than those ascribed here. It is possible that you have still-births or witness the death of your children in their first year.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Kalanirdesat Putranasa Yoga</td>
                            <td>Malefics are Jupiter and Lagna.</td>
                            <td>Kalanirdesat Putranasa Yoga indicates that you will lose someone who is extremely dear to you in either your 32nd or your 40th year. The likelihood of your son being the person whom you lose is extremely high during this Yoga. However, this will only happen if all the three factors bearing on the house of children, viz., the house, the Lord and the karaka have some sort of affliction. However, this Yoga has been found to result in the deaths of a few children with some others surviving this ill-fate.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Buddhimaturya Yoga</td>
                            <td>The fifth Lord, being a benefic, is either being aspected by another benefic or is occupying a benefic sign.</td>
                            <td>Buddhimaturya Yoga indicates that you will have great intelligence and a strong character. For this to happen, the fifth Lord must be benefic. Unfortunately, it can only be benefic regarding Vrishabha, Mithuna, Simha, Vrischika, Makara, Kumbha and Meena. This means that if you are born in Mesha, Kataka, Kanya, Thula and Dhanus, you will not benefit from this Yoga.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Theevrabuddhi Yoga</td>
                            <td>The Lord of the navamsa, in which the Lord of the fifth is placed, is aspected by benefics, and the fifth Lord himself is a benefic.</td>
                            <td>Theevrabuddhi Yoga indicates that you are likely to be precociously intelligent. You may even turn out to be a genius. You will have plenty of experiences wherein you use your intelligence immaculately. However, whether or not your intellect is noticed is another matter. If you are born to particularly indifferent parents, your intelligence might not be very apparent until you mature enough. If you are fortunate, your intelligence might be noticed quite early on.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Buddhi Jada Yoga</td>
                            <td>The Lord of the Ascendant is conjoined with or aspected by evil planets, Saturn occupies the fifth house and the Lord of Lagna is bring aspected by Saturn.</td>
                            <td>Buddhi Jada Yoga indicates dullness and the lack of intellect in the native. You might find it difficult to understand things and apply your knowledge as quickly as the average person. People might call consider you to be a dunce. Further, if certain astrological elements fall into place, your children might also get the brunt of your dullness. Nevertheless, this Yoga also suggests that you will have little to no problems in your life that can be considered as a trade-off for intellectual bankruptcy.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Thrikalagnana Yoga</td>
                            <td>Jupiter is occupying Mrudwamsa in its own navamsa, or Gopuramsa and is aspected by a benefic planet.</td>
                            <td>Thrikalagnana Yoga indicates that you might get the incredible power of knowing the future. You might develop what people consider to be your third eye. You will have glimpses of the past as well as the future. Even the things which are currently happening in the present might appear before your eyes. However, if you do not fulfil the exact criteria to be in this Yoga, you will struggle to have Mrudwamsa and your visions consistently.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Putra Sukha Yoga</td>
                            <td>The fifth house is occupied by Jupiter and Venus, or Mercury is joining the fifth house, or the fifth house happens to be the sign of a benefic. and is occupied by benefic.</td>
                            <td>Putra Sukha Yoga indicates that you will be blessed with children who will bring happiness to your life beyond your imagination. You might witness the heartache of other parents because of dislike, disobedience or disrespect on the part of grown-up children towards them. However, you must not be discouraged from having children. It is extremely unlikely for these things to happen to you.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Jara Yoga</td>
                            <td>The tenth house is occupied by the Lords of the tenth, second and seventh houses.</td>
                            <td>Jara Yoga indicates that you will indulge in adultery and have extra-marital relations with several women. You might develop a distaste for sex with your spouse because of your self-imposed expectations. It might also have something to do with your spouse’s enthusiasm or the lack of it. However, you will likely be of a questionable character and your involvement in adultery will be solely due to your interest in other women physically.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Jarajaputra Yoga</td>
                            <td>Powerful Lords of the fifth and the seventh houses join with the Lord of the sixth house and is aspected by benefics.</td>
                            <td>Jarajaputra Yoga indicates that you will lack the power of procreation. Despite you and your spouse’s incredible efforts, you might not be able to have children which can make your life unhappy. However, it is possible that your spouse will have a son with another person. This will result from your spouse’s illegitimate relationship with that other person. Both you and your spouse will commit adultery and it is most likely you who will push your spouse to commit adultery.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bahu Stree Yoga</td>
                            <td>The Lords of the Lagna and the seventh house are in conjunction or aspect with each other.</td>
                            <td>Bahu Stree Yoga indicates that you will have a remarkable sexual appetite which will lead to some questionable practices. You will have a very active sexual life and your appetite will push you to commit adultery. Your spouse will fail to satisfy your needs and you will take refuge in other people. You will have multiple sexual partners and if you are a man, you might even end up marrying several women.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Satkalatra Yoga</td>
                            <td>The Lord of the seventh house or Venus is joined or is aspected by Jupiter or Mercury.</td>
                            <td>Satkalatra Yoga indicates that you will be blessed with a pious spouse. They will be remarkably noble and virtuous. You will be lucky to have them in your life as they will make your life considerably easier. It is unlikely that they will betray you. If you are a man, your wife will follow proper moral etiquette very strictly. They will have discipline, be God-fearing and have a healthy attachment to you.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Bhaga Chumbana Yoga</td>
                            <td>The Lord of the seventh is in the fourth house in conjunction with Venus.</td>
                            <td>Bhaga Chumbana Yoga indicates that you will embrace the peculiarities of life. Even though people find it incredibly annoying or even disgusting at times, you take your time to think about the nuances in weird things. You tend to caress the things which are humiliated or rejected by other people. Further, you also indulge in Bhaga Chumbana, meaning you indulge yourself in oral sex.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bhagya Yoga</td>
                            <td>A strong benefic is in Lagna, the third or fifth house, simultaneously aspecting the ninth house.</td>
                            <td>Bhagya Yoga indicates that you are incredibly fortunate in your life. Even when things go wrong for other people who are mostly in the same situation as you are, you often tend to be the lucky one who escapes the bad experiences. In terms of personality, you are quite free-spirited. You love to indulge yourself in things that provide pleasure. Further, you will also likely be quite rich.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Jananatpurvam Pitru Marana Yoga</td>
                            <td>The Sun is in the sixth, eighth or twelfth house. The Lord of the eighth is in the ninth house. The Lord of the twelfth house in Lagna, and the Lord of the sixth in the fifth house.</td>
                            <td>Jananatpurvam Pitru Marana Yoga indicates that you will be unfortunate to lose your parents before or during your birth. It is possible that at least one of your parents pass away from unfortunate circumstances. They might get involved in a fatal accident. However, it is also possible that they might die a natural death as well. Although it is rare, you might be born posthumously, several weeks/months after your parents' death in unusual circumstances. It is, however, more likely that your mother might die while giving birth to you. It must be understood that such misfortunes are not guaranteed to occur.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Dhatrutwa Yoga</td>
                            <td>The Lord of the ninth house is exalted, and aspected by a benefic, and the ninth house is occupied by a benefic.</td>
                            <td>Dhatrutwa Yoga indicates that you will be an extremely generous and kind soul. You will have an instinct for generosity. Right from the time of your birth, you will have a tendency of giving away things to the people that needs them more than you do. The level of generosity, in terms of what you give away or what you do, depends upon the strength of the ninth house. Nevertheless, despite how strong your ninth house is, you will make large endowments for charitable purposes without expecting anything in return.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Apakeerti Yoga</td>
                            <td>The tenth house is occupied by the Sun and Saturn who joins malefic amsas or is aspected by malefics.</td>
                            <td>Apakeerti Yoga indicates that you might develop a bad reputation among people. This may bring some unhappiness to your life and even disrupt your goals and ambitions if you are not very careful. Fortunately, there might be some relief if Jupiter aspects on the Sun-Saturn combination in the tenth house. However, even though this can act as a powerful antidote to this Yoga, you will still have some sort of a setback in your reputation, even if it is temporary.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>Three or more planets are in exaltation or own house occupying kendras.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>A planet is in debilitation but with bright rays, or retrograde, and occupies favourable positions.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>Two, three or four planets possess Digbala.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Lagna is Kumbha with Sukra in it and four planets are exalted without occupying evil navamsas or shastiamsas.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Moon is in Lagna, Jupiter in the fourth house, Venus in the tenth and Saturn exalted or in his own house.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Lord of the sign, a planet is debilitated in, or the planet, that would be exalted there, is in a kendra from the Moon or Lagna.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Moon is in a kendra other than Lagna and aspected by Jupiter and/or another powerful planet.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>Planets in debilitated Rasis occupies exalted Navamsa.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>Jupiter in Lagna and Mercury in a kendra is aspected respectively by the Lords of the ninth and eleventh house.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>Saturn in exaltation or Moolathrikona occupies a kendra or thrikona aspected by the Lord of the tenth house.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Moon joins Mars in the second or third house and Rahu occupies the fifth house.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Lord cf the tenth occupies an exalted or friendly navamsa in the ninth house having attained Uttamamsa.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>Jupiter is in the fifth house from Lagna and in a kendra from the Moon. The Lagna is a fixed sign and the Lord occupies the tenth house.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Lord of the navamsa occupied by the Moon is disposed in a quadrant or trine either from Lagna or Mercury.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Lagna being Taurus with the Moon in it, Saturn, the Sun and Jupiter occupies the tenth, fourth and seventh houses respectively.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Lord of the Navamsa occupied by a debilitated planet joins a quadrant or trine from Lagna which is a movable sign and the :ord of the Lagna is also in a movable sign.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Lord of Lagna joins a debilitated planet and Rahu and Saturn occupies the tenth house, aspected by the Lord of the ninth.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>Out of the Lords of the eleventh, the ninth and the second houses, at least one planet is in a kendra from the Moon and Jupiter is the Lord of the second, fifth or the eleventh house.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>Jupiter, Mercury, Venus or the Moon joins the ninth, free from combustion and is aspected by or associated with friendly planets.</td>
                            <td>Raja Yoga indicates that the native lives the life of a king. You will most likely become a revered person who has influence over many people. Even if you do not become a ruler yourself, you will be someone who has almost just as much influence and power as an actual ruler. Further, you will be fortunate to have tremendous wealth which will enable you to strengthen your influence.</td>
                            <td>Positive</td>
                        </tr>
                        <tr>
                            <td>Galakarna Yoga</td>
                            <td>The third house is occupied by Mandi and Rahu or by Mars in the shashtiamsa of Preta Puriha.</td>
                            <td>Galakarna Yoga indicates that the native suffers from ear troubles. This may or may not lead to the loss of your hearing. If you are fortunate, your ear problems will not be too severe and might extend only to infections and ear pain. However, if you are unfortunate, your infections or other ear problems might make you go deaf. Your deafness can also occur out of nowhere without prior warning or any sort of indication of ear problems.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Vrana Yoga</td>
                            <td>The sixth Lord, being a malefic, occupies the Lagna, the eighth or the tenth house.</td>
                            <td>Vrana Yoga indicates that the native suffers from the dreadful disease of cancer. Depending upon your natal chart, cancer might occur in your head, your face, your throat or neck, your lower stomach, your nose, eyes, legs, or, abdomen. The tumours will, however, be mostly malignant. Nevertheless, the severity of this dreadful disease in you further depends upon your natal chart as well. It is important that you are mindful of the environment you expose yourself to.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sisnavyadhi Yoga</td>
                            <td>Mercury joins Lagna in association with the Lords of the sixth and eighth house.</td>
                            <td>Sisnavyadhi Yoga indicates that the native will suffer from incurable sexual diseases. It is important for you to remain vigilant in your sexual life. Failing to do so might bring problems such as hydrocele, epididymitis, orchitis, phimosis, genital fistula, gonorrhoea, tumours of the ovary, dysmenorrhea, etc. Sexual perversions and excessive sex might also lead to social problems.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Kalatrashanda Yoga</td>
                            <td>The Lord of the seventh should join the sixth house with Venus.</td>
                            <td>Kalatrashanda Yoga indicates that the native’s spouse will be frigid. You might have the misfortune of not having any children due to various problems with your spouse’s health. Their impotence might form due to excessive indulgence in sexual intercourse or similar sexual activities. It is also possible that they might not have properly developed sexual organs, or they might have certain psychological inhibitions. In the case of a woman, this Yoga suggests that she will be unable to provide adequate sexual pleasure to you.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Kushtaroga Yoga</td>
                            <td>The Lord of Lagna joins the fourth or twelfth house in conjunction with Mars and Mercury.</td>
                            <td>Kushtaroga Yoga indicates that the native suffers from leprosy. This unfortunate disease might occur due to unsanitary living conditions but also due to moral turpitude in your previous life. You might also experience a peculiarity in this disease. Leprosy in your body might not be detected even after rigorous medical checks. Further, you might notice that your symptoms subside during certain periods.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Kushtaroga Yoga</td>
                            <td>Jupiter occupies the sixth house in association with Saturn and the Moon.</td>
                            <td>Kushtaroga Yoga indicates that the native suffers from leprosy. This unfortunate disease might occur due to unsanitary living conditions but also due to moral turpitude in your previous life. You might also experience a peculiarity in this disease. Leprosy in your body might not be detected even after rigorous medical checks. Further, you might notice that your symptoms subside during certain periods.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Kshayaroga Yoga</td>
                            <td>Rahu is in the sixth house, Mandi is in a kendra from Lagna, and the Lord of Lagna is in the eighth house.</td>
                            <td>Kshayaroga Yoga indicates that the native suffers from tuberculosis. You might develop consumption due to your unhealthy lifestyle or due to the kind of environment you expose yourself to. It is important that you take utmost care of your body, especially if you contract this disease. Depending on your efforts, you will experience the severity of consumption. If things go out of control, it might even be fatal for you.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bandhana Yoga</td>
                            <td>The Lord of the Lagna and the sixth house join a kendra or thrikona with Saturn, Rahu or Kethu.</td>
                            <td>Bandhana Yoga indicates that the native will be incarcerated. This incarceration might be due to all sorts of reasons. However, it is most likely to be due to some political offences that you make. It is also highly likely that you will be imprisoned due to a criminal offence. You must take the utmost care to not stray from the legal path. Failing to do so will land you in jail even if your crime is minor.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Karascheda Yoga</td>
                            <td>Saturn and Jupiter are in the ninth and the third house respectively.</td>
                            <td>Karascheda Yoga indicates that the native's hands will be cut off. Fortunately, for this result to happen, you will require more than just the presence of Saturn in the ninth house and the presence of Jupiter in the third. It is only when Saturn and Jupiter are highly afflicted and occupy cruel shashtiamsas, that you will lose your hands. Technological advancements further reduce your risk of finding yourself without your hands. Nevertheless, it will be wise for you to remain vigilant around accident-prone areas and/or situations.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sirachcheda Yoga</td>
                            <td>The Lord of thc sixth is in conjunction with Venus while the Sun or Saturn joins Rahu in a cruel shashtiamsa.</td>
                            <td>Sirachcheda Yoga indicates that the native’s death might come from decapitation. It is possible that your limbs might also get cut off. Such misfortunes can either come from accidents or might be inflicted by other people. It is important that you remain vigilant and not make other people suffer as your misfortunes might also come as revenge. The decapitation might also come as a punishment from nature.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Durmarana Yoga</td>
                            <td>The Moon being aspected by the Lord of Lagna occupies the sixth, eighth or twelfth house in association with Saturn, Mandi or Rahu.</td>
                            <td>Durmarana Yoga indicates that the person might meet an unnatural death. This refers to deaths that do not occur due to old age as well as deaths from some prolonged sickness. The unnatural death which you might experience can be either self-inflicted, such as suicide, or it can also be executed by external factors such as poisoning, weapons, etc. You can also die from attacks made by wild beasts, drowning, accidents, etc.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Yuddhe Marana Yoga</td>
                            <td>Mars, being Lord of the 6th or 8th, conjoins the 3rd Lord and Rahu, Saturn or Mandi in cruel amsas.</td>
                            <td>Yuddhe Marana Yoga indicates that you might die in a battle. Your death will most probably bring you admiration from your fellow citizens or colleagues posthumously. The reason for your involvement in the battle will likely be your patriotism or your commitment to your duty. If so, you will be glorified by the nation. People will see your death as a sacrifice for the greater good. Your actions will likely be seen as something that will enable you to find a place in the Heavens.</td>
                         <td>Both</td>
                        </tr>
                        <tr>
                            <td>Sanghataka Marana Yoga</td>
                            <td>Presence of a plethora of evil planets in the eighth house, occupying martian Rasi or Navamsa and joining evil subdivisions.</td>
                            <td>Sanghataka Marana Yoga indicates that you will have a terrible experience which might be fatal. This experience will bring catastrophe and put the lives of many people at risk. It is unlikely that you will die from old age. It is also unlikely that you will die alone. This Yoga suggests that your death will come from disasters such as earthquakes, explosions, the sinking of a ship, crashing of an aeroplane, etc. You might even die during a pandemic when people die en masse. Therefore it is advisable for you to remain vigilante if you can.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Sanghataka Marana Yoga</td>
                            <td>The Sun, Rahu and Saturn are aspected by the eighth Lord and joins evil amsas.</td>
                            <td>Sanghataka Marana Yoga indicates that you will have a terrible experience which might be fatal. This experience will bring catastrophe and put the lives of many people at risk. It is unlikely that you will die from old age. It is also unlikely that you will die alone. This Yoga suggests that your death will come from disasters such as earthquakes, explosions, the sinking of a ship, crashing of an aeroplane, etc. You might even die during a pandemic when people die en masse. Therefore it is advisable for you to remain vigilante if you can.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Peenasaroga Yoga</td>
                            <td>The Moon, the Saturn and a malefic are in the sixth, eighth and twelfth house respectively. Lagnadhipathi joins malefic Navamsa.</td>
                            <td>Peenasaroga Yoga indicates that you will suffer from problems in your nose. You might have an inflammation of your Schneiderian Membrane. This will lead to various problems and even lead to the rotting of your nasal canal. Your nose might sometimes become full of foetid matter and discharge blood mixed with pus. Your nasal problems will bring in other problems such as heaviness of the head, disgust for food, etc.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Pittaroga Yoga</td>
                            <td>The sixth house is occupied by the Sun in conjunction with a malefic and further aspected by another malefic.</td>
                            <td>Pittaroga Yoga indicates that the native suffers from various diseases, especially related to the digestive system. You will have frequent bilious complaints throughout your life. Your metabolism might be affected by your health problems as well. You must be careful of what you eat and failing to do so will increase the chances of your problems. If you aren't careful, you might also suffer from jaundice, sleeplessness, an increase in hunger, ulcers, etc.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Vikalangapatni Yoga</td>
                            <td>Venus and Sun occupies the seventh, ninth or fifth house.</td>
                            <td>Vikalangapatni Yoga indicates that your spouse might develop a physical problem at some point in their life. While it is possible that you will marry someone who has deformed limbs, it is also possible that your spouse will go on to have some deformation in their limbs later on. This deformation will not necessarily be visible or apparent to most people but it is certainly not guaranteed.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Putrakalatraheena Yoga</td>
                            <td>The waning Moon is in the fifth house and malefics occupy the twelfth and seventh house along with the Lagna.</td>
                            <td>Putrakalatraheena Yoga indicates that you might have problems when it comes to your family and children. Various problems might come up when you try to have a happy family. You will either be unable to have a happy family or lose them in some way, after managing to have one. The same goes for children as well. You are likely to be deprived of the happiness that a family brings to a person’s life.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Bharyasahavyabhichara Yoga</td>
                            <td>Venus, Saturn and Mars join the Moon in the seventh house.</td>
                            <td>Bharyasahavyabhichara Yoga indicates that you might not find satisfaction in your sexual relationship with your spouse. Both you and your spouse will likely be unsatisfied with your physical relationship. This dissatisfaction will push you both towards adultery. You both will have sexual partners outside your relationship and have affairs with them. Even if you both come to know about each other’s secrets, you both will continue to commit adultery.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Vamsacheda Yoga</td>
                            <td>The tenth, seventh and fourth houses are occupied by the Moon, the Venus and the malefics respectively.</td>
                            <td>Vamsacheda Yoga indicates that you will have what is considered one of the biggest misfortunes by many. It is possible that you will be the last person in your family and you likely will be the one responsible for the extinction of your family. This might be due to your inability to have children and thereby preserving the family line, or due to an accident that will see that your family ends with you. Nevertheless, it must be understood that these misfortunes are not set in stone.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Guhyaroga Yoga</td>
                            <td>The Moon joins malefics in the Navamsa of Cancer or Scorpio.</td>
                            <td>Guhyaroga Yoga indicates that you are likely to suffer from diseases in the private parts of your body. This includes piles, hernia and complicated forms of sexual troubles. Other than these, you might also suffer from digestive problems such as dyspepsia. You might even have heart-related problems such as the palpitation of your heart. However, digestive and heart problems have a comparatively less probability than the other problems.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Angaheena Yoga</td>
                            <td>The Moon is in the tenth house, Mars is in the seventh house and Saturn is in the second house from the Sun.</td>
                            <td>Angaheena Yoga indicates that you might have the terrible misfortune of losing your limbs at some point in your life. Even if you do not get amputated, you might deprive yourself of the usage of certain parts of your body. This might be due to rheumatism, paralysis or injuries inflicted by weapons. There is also a chance for you to get attacked by wild beasts.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Swetakushta Yoga</td>
                            <td>Mars and Saturn are in the second and twelfth house respectively. The Moon is in Lagna and the Sun is in the seventh house.</td>
                            <td>Swetakushta Yoga indicates that you have the affinity to get a dreadful disease. This disease is most likely to be white leprosy. However, this Yoga does not indicate that you will suffer from leprosy, but only that you are likely to suffer from it. Therefore it is crucial that you maintain a healthy and sanitary lifestyle. Even if you do suffer from leprosy, you might still be able to cure yourself of it.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Pisacha Grastha Yoga</td>
                            <td>Rahu is in Lagna which is in conjunction with the Moon and the malefics join trines.</td>
                            <td>Pisacha Grastha Yoga indicates that you might experience negative encounters with ‘spirits’. They will likely attack you sometimes, making it difficult for you to carry on with your daily chores. You might even be pushed towards insanity because of the undesirable experiences with them. Your problems, however, can either root in the fact that you are possessed by spirits at times, or it might just be a mental disorder. Your unsavoury experiences might also push you to your eventual death.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Andha Yoga</td>
                            <td>The Sun rises in Lagna which is in conjunction with Rahu and malefics are disposed in thrikona.</td>
                            <td>Andha Yoga indicates that you have blindness in your eyes right from birth. This is most likely to be complete blindness instead of hazy or partial blindness. You will be unfortunate enough to live a life without seeing anything right from the get-go. However, this does not mean that you won't be able to live your life properly. Nevertheless, you might also experience problems that will make it difficult for you to urinate and you might even suffer from bleeding piles.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Andha Yoga</td>
                            <td>Mars, the Moon, Saturn and the Sun occupy the second, sixth, twelfth and eighth house respectively.</td>
                            <td>Andha Yoga indicates that you have blindness in your eyes right from birth. This is most likely to be complete blindness instead of hazy or partial blindness. You will be unfortunate enough to live a life without seeing anything right from the get-go. However, this does not mean that you won't be able to live your life properly. Nevertheless, you might also experience problems that will make it difficult for you to urinate and you might even suffer from bleeding piles.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Vatharoga Yoga</td>
                            <td>Jupiter is in Lagna and Saturn is in the seventh house.</td>
                            <td>Vatharoga Yoga indicates that you suffer from various health-related problems which root from windy complaints in your stomach. You will have abnormal functions in your body which will lead to cheerlessness, pain in the body, swelling, contractions, numbness or paralysis of the limbs. You might also suffer from constipation, flatulence, sleeplessness, loss of enthusiasm, and fainting. There’s a possibility that you might also suffer from obesity.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Matibhramana Yoga</td>
                            <td>Jupiter and Mars occupy the Lagna and the seventh house respectively.</td>
                            <td>Matibhramana Yoga indicates that you might have a difficult time controlling your mind. You likely turn insane in your life owing to various reasons. Your insanity might root from your haphazard lifestyle or stress. It can also be due to poisoning or because of karma from your bad deeds. The insanity can creep in suddenly or gradually depending upon your natal chart as well as your actions. As insanity approaches, your vision will become stale, your actions purposeless and your speech, incoherent.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Matibhramana Yoga</td>
                            <td>Saturn is in Lagna and Mars joins the ninth, fifth or seventh house.</td>
                            <td>Matibhramana Yoga indicates that you might have a difficult time controlling your mind. You likely turn insane in your life owing to various reasons. Your insanity might root from your haphazard lifestyle or stress. It can also be due to poisoning or because of karma from your bad deeds. The insanity can creep in suddenly or gradually depending upon your natal chart as well as your actions. As insanity approaches, your vision will become stale, your actions purposeless and your speech, incoherent.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Matibhramana Yoga</td>
                            <td>Saturn occupies the twelfth house with the waning Moon.</td>
                            <td>Matibhramana Yoga indicates that you might have a difficult time controlling your mind. You likely turn insane in your life owing to various reasons. Your insanity might root from your haphazard lifestyle or stress. It can also be due to poisoning or because of karma from your bad deeds. The insanity can creep in suddenly or gradually depending upon your natal chart as well as your actions. As insanity approaches, your vision will become stale, your actions purposeless and your speech, incoherent.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Matibhramana Yoga</td>
                            <td>The Moon and Mercury are in a kendra, aspected by, or conjoined with any other planet.</td>
                            <td>Matibhramana Yoga indicates that you might have a difficult time controlling your mind. You likely turn insane in your life owing to various reasons. Your insanity might root from your haphazard lifestyle or stress. It can also be due to poisoning or because of karma from your bad deeds. The insanity can creep in suddenly or gradually depending upon your natal chart as well as your actions. As insanity approaches, your vision will become stale, your actions purposeless and your speech, incoherent.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Khalwata Yoga</td>
                            <td>The ascendant is a malefic sign or Sagittarius or Taurus aspected by malefic planets.</td>
                            <td>Khalwata Yoga suggests that you will experience the misfortune of going bald in your life. Even if you take drastic measures to reduce balding, you might not be quite successful in keeping your hair towards the later part of your life. If you put in good efforts, however, you might be able to push the age at which you will go bald. Despite many people considering baldness as a misfortune, you can also take it as something natural that happens to most people which might soften the blow.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Nishturabhashi Yoga</td>
                            <td>The Moon is in conjunction with Saturn.</td>
                            <td>Nishturabhashi Yoga indicates that you have a sharp tongue. You are likely to be quite straightforward with your opinion and this might end up hurting people’s sentiments. You are harsh not only in your opinions but in your speech in general. You do not sugarcoat your thoughts. While this is a good thing in some cases, you must also try to control it to not hurt people without intention. You might also be very sarcastic.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Rajabhrashta Yoga</td>
                            <td>The Lords of Aroodha Lagna and Aroodha Dwadasa are in conjunction.</td>
                            <td>Rajabhrashta Yoga indicates that you will be subjected to a lot of suffering. People with power and good social standing will exploit their powers to make your life difficult. To live a peaceful life, you might need to take the help of other powerful people. In general, your life is tragic. This can be either from the mistakes that you make throughout your life or from no particular fault of yours. Either way, you need to remain vigilant and make proper connections to live a good life.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The ascendant being Leo, Saturn must be in exaltation occupying a debilitated Navamsa or aspected by benefics.</td>
                            <td>Raja Yoga indicates that the native has the fortune of being born into a royal family. However, your lifestyle does not reflect your royalness. Even though you are from a royal family, you will be bereft of fortune. You are not born with a golden spoon in your mouth despite your royal blood. Unlike kings and queens, you also lack a good social position. If you want wealth and respect, you will need to work for it just like the common people without any royal heritage.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Raja Yoga</td>
                            <td>The Sun must occupy the tenth degree of Libra.</td>
                            <td>Raja Yoga indicates that the native has the fortune of being born into a royal family. However, your lifestyle does not reflect your royalness. Even though you are from a royal family, you will be bereft of fortune. You are not born with a golden spoon in your mouth despite your royal blood. Unlike kings and queens, you also lack a good social position. If you want wealth and respect, you will need to work for it just like the common people without any royal heritage.</td>
                            <td>Negative</td>
                        </tr>
                        <tr>
                            <td>Gohanta Yoga</td>
                            <td>A malefic devoid of benefic aspect in a kendra and Jupiter in the 8th house.</td>
                            <td>Gohanta Yoga indicates that you will go on to take up professions that involve cruelty against animals. You may end up as a butcher. While in some places this can bring a bad reputation for you, most places do not judge butchers due to the necessary role that they play in the food habits of most people. People will generally consider you to be humane, unless if you enjoy slaughtering animals just for the sake of it.</td>
                            <td>Negative</td>
                        </tr>
                        </tbody>
                        </table></div>
                </div>
        </div>
    </section>
    {/*  */}
    <Home_Private_Confidential/>
    {/*  */}
    <Footer/>
    </div>
  )
}

export default Astrology_Yoga