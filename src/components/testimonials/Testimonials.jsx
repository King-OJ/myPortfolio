import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "from Freelancer",
          img:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "Great job from this guy, I highly recommend him for react projects",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "from Fiverr",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "He delivered our Ecommerce project right on time with no bugs, cool guy ",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "from Upwork",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "I have to say, this man knows his craft. Go ahead, hand react js jobs to him",
        },
      ];

    return (
        <div className="testimonials" id="testimonials">
           <h1>Testimonials</h1>
           <div className="container">
                {data.map(d=> (
                    <div key={d.id} className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                                <img src="assets/right-arrow.png" className="left" alt="" />
                                <img src={d.img} className="user" alt="" />
                                <img src={d.icon} className="right" alt="" />
                        </div>
                        <div className="center">{d.desc}</div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div> )
                )}
           </div>
        </div>
    )
}
