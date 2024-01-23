export default function Line() {
  const red = <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "-1px"}} width="175" height="12" viewBox="0 0 175 12" fill="none">
          <path d="M-0.666992 1C8.04441 1 8.04441 11 16.7558 11C25.4672 11 25.4672 1 34.1786 1C42.89 1 42.89 11 51.581 11C60.2927 11 60.2927 1 68.9834 1C77.695 1 77.695 11 86.3857 11C95.0973 11 95.0973 1 103.808 1C112.52 1 112.52 11 121.231 11C129.942 11 129.942 1 138.654 1C147.366 1 147.366 11 156.077 11C164.788 11 164.788 1 173.5 1" stroke="url(#paint0_linear_81_3775)" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
          <defs>
          <linearGradient id="paint0_linear_81_3775" x1="173.385" y1="10.9938" x2="172.242" y2="-8.91499" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CA0303"/>
          <stop offset="1" stopColor="#F92D2D"/>
          </linearGradient>
          </defs>
        </svg>

  const yellow = <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "-1px"}} width="175" height="12" viewBox="0 0 175 12" fill="none">
          <path d="M-0.666992 1C8.04441 1 8.04441 11 16.7558 11C25.4672 11 25.4672 1 34.1786 1C42.89 1 42.89 11 51.581 11C60.2927 11 60.2927 1 68.9834 1C77.695 1 77.695 11 86.3857 11C95.0973 11 95.0973 1 103.808 1C112.52 1 112.52 11 121.231 11C129.942 11 129.942 1 138.654 1C147.366 1 147.366 11 156.077 11C164.788 11 164.788 1 173.5 1" stroke="url(#paint0_linear_81_3790)" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
          <defs>
          <linearGradient id="paint0_linear_81_3790" x1="173.327" y1="10.9907" x2="172.184" y2="-8.90521" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A00"/>
          <stop offset="0.994" stopColor="#FBDE1F"/>
          <stop offset="1" stopColor="#FBDE1F"/>
          </linearGradient>
          </defs>
        </svg>
  
  return (
    <div>
      <ul style={{display: "flex", position: "absolute", bottom: "-8px"}}>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
          <li>{red}</li>
        </ul>
        <ul style={{display: "flex", position: "absolute", bottom: "-14px"}}>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
          <li>{yellow}</li>
      </ul>
    </div>
  )
}