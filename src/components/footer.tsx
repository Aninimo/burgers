import { Mail, MapPin, PhoneCall } from "lucide-react"

export function Footer(){
  return(
    <footer className="d-flex align-items-center justify-content-between footer">
      <div className="input">
        <h4>
          Notify Me Latest Offer
        </h4>
        <div>
          <input
            placeholder="Email..."
          />
          <button className="btn bg-danger text-white">
            Subscribe
          </button>
        </div>
      </div>
      <div className="boxFooter bg-danger p-4">
        <ul className="text-white">
          <li className="list-group-item mb-4">
            <PhoneCall/>
            +00 0000-0000
          </li>
          <li className="list-group-item mb-4">
            <Mail/>
            email@gmail.com
          </li>
          <li className="list-group-item">
            <MapPin/>
            location
          </li>
        </ul>
      </div>
    </footer>
  )
}
