import { Loader2, Moon, Sun } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;
const Icons = {
  sun: (props: IconProps) => <Sun {...props} />,
  loader: (props: IconProps) => <Loader2 {...props} />,
  moon: (props: IconProps) => <Moon {...props} />,
  logout: (props: IconProps) => (
    <svg
      fill="currentColor"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 384.971 384.971"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <g id="Sign_Out">
          <path
            d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
			C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
			C192.485,366.299,187.095,360.91,180.455,360.91z"
          />
          <path
            d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
			c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
			c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"
          />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </g>
    </svg>
  ),
  globe: (props: IconProps) => (
    <svg
      width="15px"
      height="15px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="currentColor"
        fillRule="evenodd"
      >
        <g
          id="Icon-Set"
          transform="translate(-204.000000, -671.000000)"
          fill="currentColor"
        >
          <path
            d="M231.596,694.829 C229.681,694.192 227.622,693.716 225.455,693.408 C225.75,691.675 225.907,689.859 225.957,688 L233.962,688 C233.783,690.521 232.936,692.854 231.596,694.829 L231.596,694.829 Z M223.434,700.559 C224.1,698.95 224.645,697.211 225.064,695.379 C226.862,695.645 228.586,696.038 230.219,696.554 C228.415,698.477 226.073,699.892 223.434,700.559 L223.434,700.559 Z M220.971,700.951 C220.649,700.974 220.328,701 220,701 C219.672,701 219.352,700.974 219.029,700.951 C218.178,699.179 217.489,697.207 216.979,695.114 C217.973,695.027 218.98,694.976 220,694.976 C221.02,694.976 222.027,695.027 223.022,695.114 C222.511,697.207 221.822,699.179 220.971,700.951 L220.971,700.951 Z M209.781,696.554 C211.414,696.038 213.138,695.645 214.936,695.379 C215.355,697.211 215.9,698.95 216.566,700.559 C213.927,699.892 211.586,698.477 209.781,696.554 L209.781,696.554 Z M208.404,694.829 C207.064,692.854 206.217,690.521 206.038,688 L214.043,688 C214.093,689.859 214.25,691.675 214.545,693.408 C212.378,693.716 210.319,694.192 208.404,694.829 L208.404,694.829 Z M208.404,679.171 C210.319,679.808 212.378,680.285 214.545,680.592 C214.25,682.325 214.093,684.141 214.043,686 L206.038,686 C206.217,683.479 207.064,681.146 208.404,679.171 L208.404,679.171 Z M216.566,673.441 C215.9,675.05 215.355,676.789 214.936,678.621 C213.138,678.356 211.414,677.962 209.781,677.446 C211.586,675.523 213.927,674.108 216.566,673.441 L216.566,673.441 Z M219.029,673.049 C219.352,673.027 219.672,673 220,673 C220.328,673 220.649,673.027 220.971,673.049 C221.822,674.821 222.511,676.794 223.022,678.886 C222.027,678.973 221.02,679.024 220,679.024 C218.98,679.024 217.973,678.973 216.979,678.886 C217.489,676.794 218.178,674.821 219.029,673.049 L219.029,673.049 Z M223.954,688 C223.9,689.761 223.74,691.493 223.439,693.156 C222.313,693.058 221.168,693 220,693 C218.832,693 217.687,693.058 216.562,693.156 C216.26,691.493 216.1,689.761 216.047,688 L223.954,688 L223.954,688 Z M216.047,686 C216.1,684.239 216.26,682.507 216.562,680.844 C217.687,680.942 218.832,681 220,681 C221.168,681 222.313,680.942 223.438,680.844 C223.74,682.507 223.9,684.239 223.954,686 L216.047,686 L216.047,686 Z M230.219,677.446 C228.586,677.962 226.862,678.356 225.064,678.621 C224.645,676.789 224.1,675.05 223.434,673.441 C226.073,674.108 228.415,675.523 230.219,677.446 L230.219,677.446 Z M231.596,679.171 C232.936,681.146 233.783,683.479 233.962,686 L225.957,686 C225.907,684.141 225.75,682.325 225.455,680.592 C227.622,680.285 229.681,679.808 231.596,679.171 L231.596,679.171 Z M220,671 C211.164,671 204,678.163 204,687 C204,695.837 211.164,703 220,703 C228.836,703 236,695.837 236,687 C236,678.163 228.836,671 220,671 L220,671 Z"
            id="globe"
          ></path>
        </g>
      </g>
    </svg>
  ),
  google: (props: IconProps) => (
    <svg
      viewBox="-3 0 262 262"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </svg>
  ),
  info: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          id="info-a"
          d="M10.5134277,0.293457031 C12.3116048,6.98051974 11.4737956,10.510549 8,10.8835449 C1.8918457,10.8835449 -0.0366210938,14.6247559 0.773681641,16.5002441 C1.58398438,18.3757324 4.12866211,19.8500977 6.21289062,20.2067871 C8.29711914,20.5634766 11.6750488,20.5915527 15.8925781,16.5002441 C20.1101074,12.4089355 17.1142578,5.80639648 15.8925781,4.07495117 C15.078125,2.9206543 13.2850749,1.66015625 10.5134277,0.293457031 Z"
        />
        <path
          id="info-c"
          d="M11,22 C4.92486775,22 0,17.0751322 0,11 C0,4.92486775 4.92486775,0 11,0 C17.0751322,0 22,4.92486775 22,11 C22,17.0751322 17.0751322,22 11,22 Z M11,20.24 C16.1031111,20.24 20.24,16.1031111 20.24,11 C20.24,5.89688891 16.1031111,1.76 11,1.76 C5.89688891,1.76 1.76,5.89688891 1.76,11 C1.76,16.1031111 5.89688891,20.24 11,20.24 Z M10,10 C10,9.44771525 10.4477153,9 11,9 C11.5522847,9 12,9.44771525 12,10 L12,15 C12,15.5522847 11.5522847,16 11,16 C10.4477153,16 10,15.5522847 10,15 L10,10 Z M11,8 C10.4477153,8 10,7.55228475 10,7 C10,6.44771525 10.4477153,6 11,6 C11.5522847,6 12,6.44771525 12,7 C12,7.55228475 11.5522847,8 11,8 Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <g transform="translate(3 1)">
          <mask id="info-b" fill="#ffffff">
            <use xlinkHref="#info-a" />
          </mask>
          <use fill="#D8D8D8" xlinkHref="#info-a" />
          <g fill="#FFA0A0" mask="url(#info-b)">
            <rect width="24" height="24" transform="translate(-4 -2)" />
          </g>
        </g>
        <mask id="info-d" fill="#ffffff">
          <use xlinkHref="#info-c" />
        </mask>
        <use fill="#000000" fillRule="nonzero" xlinkHref="#info-c" />
        <g fill="#7600FF" mask="url(#info-d)">
          <rect width="24" height="24" transform="translate(-1 -1)" />
        </g>
      </g>
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  notion: (props: IconProps) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000"
      />
    </svg>
  ),
  storybook: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="-31.5 0 319 319"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <path
          d="M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z"
          id="path-1"
        ></path>
      </defs>
      <g>
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1"></use>
        </mask>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#path-1"></use>
        <path
          d="M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z"
          fill="#FFFFFF"
          fillRule="nonzero"
          mask="url(#mask-2)"
        ></path>
      </g>
    </svg>
  ),
  docker: (props: IconProps) => (
    <svg
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M30.679 13.367c-0.613-0.404-1.366-0.645-2.175-0.645-0.093 0-0.185 0.003-0.276 0.009l0.012-0.001c-0.446 0.001-0.882 0.041-1.306 0.115l0.046-0.007c-0.235-1.357-1.025-2.495-2.122-3.191l-0.019-0.011-0.429-0.248-0.282 0.408c-0.336 0.512-0.599 1.108-0.756 1.745l-0.008 0.039c-0.089 0.324-0.14 0.696-0.14 1.080 0 0.831 0.24 1.605 0.654 2.258l-0.010-0.017c-0.637 0.299-1.381 0.488-2.164 0.524l-0.013 0h-19.729c-0.516 0.001-0.934 0.418-0.936 0.933v0c-0.001 0.056-0.001 0.123-0.001 0.19 0 1.751 0.317 3.428 0.897 4.977l-0.032-0.098c0.558 1.633 1.612 2.975 2.98 3.881l0.028 0.017c1.744 0.903 3.808 1.432 5.995 1.432 0.207 0 0.412-0.005 0.617-0.014l-0.029 0.001c0.018 0 0.039 0 0.060 0 1.272 0 2.515-0.121 3.72-0.352l-0.123 0.020c1.795-0.336 3.395-0.939 4.845-1.773l-0.074 0.039c1.257-0.735 2.331-1.621 3.245-2.652l0.012-0.014c1.325-1.56 2.403-3.381 3.145-5.365l0.041-0.125h0.276c0.055 0.002 0.119 0.004 0.183 0.004 1.226 0 2.34-0.481 3.163-1.265l-0.002 0.002c0.377-0.358 0.676-0.793 0.873-1.281l0.009-0.024 0.122-0.359zM3.79 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 14.849h2.644c0.127 0 0.231-0.103 0.231-0.231 0 0 0 0 0-0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0 0-0 0-0 0-0.128 0-0.232 0.104-0.232 0.232 0 0 0 0 0 0v0 2.355c0.001 0.128 0.104 0.231 0.232 0.231v0zM11.132 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0.127 0.103 0.231 0.231 0.231v0zM14.788 14.849h2.643c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 11.461h2.644c0.128-0.001 0.231-0.104 0.231-0.232 0 0 0 0 0 0v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.644c-0.128 0-0.231 0.103-0.232 0.231v2.355c0.001 0.128 0.104 0.231 0.232 0.232h0zM11.132 11.461h2.646c0.127-0.001 0.23-0.105 0.23-0.232v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0.001 0.128 0.103 0.231 0.231 0.232h0zM14.788 11.461h2.643c0.128-0.001 0.231-0.104 0.232-0.232v-2.355c-0.001-0.128-0.104-0.231-0.232-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0 0.128 0.103 0.231 0.231 0.232h0zM14.788 8.073h2.643c0 0 0 0 0 0 0.128 0 0.232-0.104 0.232-0.232 0-0 0-0 0-0v0-2.356c-0.001-0.128-0.104-0.231-0.232-0.231 0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM18.475 14.849h2.644c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.644c0 0 0 0-0 0-0.128 0-0.231 0.103-0.231 0.231v2.356c0 0.127 0.103 0.231 0.231 0.231v0z"></path>
    </svg>
  ),
  nextjs: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  k8s: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.374 15c-.335 0-.66-.153-.874-.431l-3.254-4.172a1.15 1.15 0 01-.214-.978l1.165-5.207c.074-.345.298-.623.605-.776l4.715-2.32c.15-.078.317-.116.485-.116.168 0 .335.038.485.115L13.2 3.426c.308.153.532.432.606.777l1.165 5.207c.074.345 0 .7-.214.978L11.5 14.566c-.214.268-.54.434-.875.434h-5.25zm7.718-5.835l.031.008a.308.308 0 01.26.371.306.306 0 01-.396.223h-.004l-.003-.001-.003-.001-.03-.007-.05-.01a2.548 2.548 0 01-.274-.106 2.87 2.87 0 00-.533-.156.242.242 0 00-.171.063 4.76 4.76 0 00-.131-.023 3.972 3.972 0 01-1.764 2.212c.015.042.032.083.051.123a.239.239 0 00-.023.18c.074.17.165.332.271.484.06.078.114.16.164.244l.028.057.012.025a.306.306 0 01-.381.44.307.307 0 01-.172-.18 2.608 2.608 0 00-.01-.02l-.028-.058a2.545 2.545 0 01-.089-.28 2.835 2.835 0 00-.21-.512.242.242 0 00-.156-.095 5.926 5.926 0 01-.03-.053l-.035-.064a3.97 3.97 0 01-2.824-.007l-.069.125a.249.249 0 00-.132.064c-.104.17-.184.355-.237.548a2.525 2.525 0 01-.088.28l-.025.05-.013.027v.001a.307.307 0 11-.553-.261l.014-.03.026-.052c.05-.085.104-.166.164-.244.108-.156.2-.322.277-.496a.302.302 0 00-.028-.173l.056-.133A3.972 3.972 0 014.22 9.532l-.134.023a.34.34 0 00-.176-.062 2.872 2.872 0 00-.533.156c-.09.04-.181.075-.274.105l-.05.011-.03.007H3.02l-.002.002h-.005a.308.308 0 01-.397-.349.306.306 0 01.261-.245l.004-.001h.003l.006-.002c.024-.006.054-.014.076-.018.097-.013.195-.021.293-.023.186-.013.37-.043.549-.09a.422.422 0 00.131-.133l.128-.037a3.938 3.938 0 01.624-2.752l-.097-.087a.338.338 0 00-.062-.176 2.854 2.854 0 00-.455-.319 2.557 2.557 0 01-.254-.148 1.129 1.129 0 01-.063-.05l-.004-.004a.323.323 0 01-.076-.45.295.295 0 01.244-.107.365.365 0 01.213.08l.022.017c.016.013.034.026.046.037.071.067.139.139.202.213.125.137.263.262.412.372.056.03.121.036.182.018l.11.078a3.938 3.938 0 012.552-1.224l.007-.129a.332.332 0 00.1-.157 2.844 2.844 0 00-.034-.554 2.555 2.555 0 01-.042-.29v-.053-.025-.004-.004A.306.306 0 018 2.82a.308.308 0 01.306.337v.087a2.53 2.53 0 01-.041.29 2.85 2.85 0 00-.035.553.242.242 0 00.1.153v.007l.007.13c.967.087 1.87.522 2.54 1.223l.116-.083a.34.34 0 00.186-.02c.149-.11.287-.235.412-.373a2.53 2.53 0 01.202-.213l.051-.04.017-.014a.308.308 0 01.472.388.307.307 0 01-.09.09c-.008.005-.017.012-.025.02l-.043.033a2.549 2.549 0 01-.254.148 2.865 2.865 0 00-.455.32.24.24 0 00-.058.172 4.458 4.458 0 01-.05.044l-.058.053c.542.806.769 1.783.637 2.745l.123.036c.031.056.077.101.132.132.18.048.364.078.55.09.097.003.195.01.292.024l.058.013zm-2.875-3.1l-1.308.925-.004-.002a.27.27 0 01-.43-.205v-.001l-.091-1.598a3.183 3.183 0 011.833.882zM7.754 7.818h.492l.306.381-.11.476L8 8.886l-.443-.213-.11-.475.307-.381zM7.29 5.24c.107-.024.216-.043.326-.056l-.09 1.6-.008.004a.268.268 0 01-.293.256.27.27 0 01-.135-.05l-.002.001-1.316-.93c.419-.41.945-.696 1.518-.825zM5.296 6.663l1.201 1.071-.001.007a.269.269 0 01-.106.462l-.001.005-1.54.443a3.134 3.134 0 01.447-1.988zm1.608 2.846l-.612 1.474a3.16 3.16 0 01-1.27-1.586L6.6 9.13l.003.003a.265.265 0 01.18.029.27.27 0 01.117.341l.004.006zm1.806 1.896c-.572.13-1.17.1-1.726-.088l.777-1.4h.001a.27.27 0 01.475-.001h.006l.779 1.402a3.286 3.286 0 01-.312.087zm1.004-.416L9.096 9.5l.001-.003a.269.269 0 01.296-.37l.003-.004 1.593.269a3.147 3.147 0 01-1.275 1.597zm1.442-2.343L9.61 8.201l-.002-.006a.27.27 0 01-.185-.343.27.27 0 01.08-.12L9.5 7.73l1.195-1.067c.366.594.527 1.29.46 1.983z"
        clipRule="evenodd"
      />
    </svg>
  ),
  jest: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>file_type_jest_snapshot</title>
      <path
        d="M27.089,15.786a2.606,2.606,0,0,0-2.606-2.606c-.093,0-.184.005-.274.014l3.58-10.557H12.577l3.574,10.548c-.052,0-.105-.005-.158-.005a2.607,2.607,0,0,0-.792,5.09,11.375,11.375,0,0,1-2.049,2.579A10.443,10.443,0,0,1,9.5,23.116a3.324,3.324,0,0,1-1.665-4.23c.077-.18.155-.362.23-.544a2.608,2.608,0,1,0-2.09-.4,20.08,20.08,0,0,0-1.889,4.788c-.354,2.135,0,4.4,1.845,5.681,4.3,2.981,8.969-1.848,13.891-3.061,1.784-.44,3.742-.369,5.313-1.28a4.443,4.443,0,0,0,2.179-3.088,4.639,4.639,0,0,0-.831-3.521,2.6,2.6,0,0,0,.606-1.671ZM18.6,15.8v-.009a2.605,2.605,0,0,0-1.256-2.23L20.188,7.8l2.85,5.814a2.6,2.6,0,0,0-1.161,2.169c0,.019,0,.038,0,.057L18.6,15.8Z"
        fill="currentColor"
      />
      <path
        d="M27.726,15.786A3.248,3.248,0,0,0,25.083,12.6L28.677,2H11.689l3.6,10.621a3.242,3.242,0,0,0-1.005,5.919,10.852,10.852,0,0,1-1.568,1.846,9.836,9.836,0,0,1-3.16,2.03,2.657,2.657,0,0,1-1.134-3.281l.04-.093.074-.175a3.244,3.244,0,1,0-3.34-.754c-.108.231-.222.465-.339.706a14.022,14.022,0,0,0-1.4,3.8c-.465,2.8.285,5.043,2.111,6.308A5.751,5.751,0,0,0,8.934,30c2.132,0,4.289-1.071,6.4-2.119a23.638,23.638,0,0,1,4.642-1.917,18.262,18.262,0,0,1,1.8-.319,9.969,9.969,0,0,0,3.679-1.028,5.088,5.088,0,0,0,2.487-3.53,5.255,5.255,0,0,0-.69-3.613,3.225,3.225,0,0,0,.475-1.688Zm-1.273,0a1.97,1.97,0,1,1-1.97-1.97,1.973,1.973,0,0,1,1.97,1.97ZM26.9,3.273l-3.174,9.36a3.283,3.283,0,0,0-.4.125l-3.135-6.4L17.046,12.72a3.276,3.276,0,0,0-.419-.114L13.464,3.273ZM15.993,13.816a1.97,1.97,0,1,1-1.97,1.97,1.972,1.972,0,0,1,1.97-1.97Zm-8.523.019A1.97,1.97,0,1,1,5.5,15.805a1.972,1.972,0,0,1,1.969-1.97Zm19.217,7.034a3.818,3.818,0,0,1-1.871,2.646,8.88,8.88,0,0,1-3.223.87c-.632.091-1.285.185-1.924.343a24.609,24.609,0,0,0-4.9,2.013c-3.164,1.571-5.9,2.928-8.472,1.143-1.887-1.308-1.8-3.728-1.58-5.054A12.775,12.775,0,0,1,6,19.376c.092-.19.182-.375.27-.559a3.25,3.25,0,0,0,.838.21,3.963,3.963,0,0,0,2.1,4.655l.245.126.259-.093a11.022,11.022,0,0,0,3.876-2.4,12.11,12.11,0,0,0,1.918-2.32,3.241,3.241,0,0,0,2.64-5.627l2.038-4.121,2.059,4.2a3.24,3.24,0,0,0,4.088,5,3.952,3.952,0,0,1,.355,2.421Z"
        fill="currentColor"
      />
    </svg>
  ),
  stripe: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 -149 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path
          d="M35.9822222,83.4844444 C35.9822222,77.9377778 40.5333333,75.8044444 48.0711111,75.8044444 C58.88,75.8044444 72.5333333,79.0755556 83.3422222,84.9066667 L83.3422222,51.4844444 C71.5377778,46.7911111 59.8755556,44.9422222 48.0711111,44.9422222 C19.2,44.9422222 0,60.0177778 0,85.1911111 C0,124.444444 54.0444444,118.186667 54.0444444,135.111111 C54.0444444,141.653333 48.3555556,143.786667 40.3911111,143.786667 C28.5866667,143.786667 13.5111111,138.951111 1.56444444,132.408889 L1.56444444,166.257778 C14.7911111,171.946667 28.16,174.364444 40.3911111,174.364444 C69.9733333,174.364444 90.3111111,159.715556 90.3111111,134.257778 C90.1688889,91.8755556 35.9822222,99.4133333 35.9822222,83.4844444 Z M132.124444,16.4977778 L97.4222222,23.8933333 L97.28,137.813333 C97.28,158.862222 113.066667,174.364444 134.115556,174.364444 C145.777778,174.364444 154.311111,172.231111 159.004444,169.671111 L159.004444,140.8 C154.453333,142.648889 131.982222,149.191111 131.982222,128.142222 L131.982222,77.6533333 L159.004444,77.6533333 L159.004444,47.36 L131.982222,47.36 L132.124444,16.4977778 Z M203.235556,57.8844444 L200.96,47.36 L170.24,47.36 L170.24,171.804444 L205.795556,171.804444 L205.795556,87.4666667 C214.186667,76.5155556 228.408889,78.5066667 232.817778,80.0711111 L232.817778,47.36 C228.266667,45.6533333 211.626667,42.5244444 203.235556,57.8844444 Z M241.493333,47.36 L277.191111,47.36 L277.191111,171.804444 L241.493333,171.804444 L241.493333,47.36 Z M241.493333,36.5511111 L277.191111,28.8711111 L277.191111,0 L241.493333,7.53777778 L241.493333,36.5511111 Z M351.431111,44.9422222 C337.493333,44.9422222 328.533333,51.4844444 323.555556,56.0355556 L321.706667,47.2177778 L290.417778,47.2177778 L290.417778,213.048889 L325.973333,205.511111 L326.115556,165.262222 C331.235556,168.96 338.773333,174.222222 351.288889,174.222222 C376.746667,174.222222 399.928889,153.742222 399.928889,108.657778 C399.786667,67.4133333 376.32,44.9422222 351.431111,44.9422222 Z M342.897778,142.933333 C334.506667,142.933333 329.528889,139.946667 326.115556,136.248889 L325.973333,83.4844444 C329.671111,79.36 334.791111,76.5155556 342.897778,76.5155556 C355.84,76.5155556 364.8,91.0222222 364.8,109.653333 C364.8,128.711111 355.982222,142.933333 342.897778,142.933333 Z M512,110.08 C512,73.6711111 494.364444,44.9422222 460.657778,44.9422222 C426.808889,44.9422222 406.328889,73.6711111 406.328889,109.795556 C406.328889,152.604444 430.506667,174.222222 465.208889,174.222222 C482.133333,174.222222 494.933333,170.382222 504.604444,164.977778 L504.604444,136.533333 C494.933333,141.368889 483.84,144.355556 469.76,144.355556 C455.964444,144.355556 443.733333,139.52 442.168889,122.737778 L511.715556,122.737778 C511.715556,120.888889 512,113.493333 512,110.08 Z M441.742222,96.5688889 C441.742222,80.4977778 451.555556,73.8133333 460.515556,73.8133333 C469.191111,73.8133333 478.435556,80.4977778 478.435556,96.5688889 L441.742222,96.5688889 L441.742222,96.5688889 Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  ),
  tailwindcss: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 -51 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          x1="-2.77777778%"
          y1="32%"
          x2="100%"
          y2="67.5555556%"
          id="linearGradient-1"
        >
          <stop stopColor="#2298BD" offset="0%"></stop>
          <stop stopColor="#0ED7B5" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
          fill="url(#linearGradient-1)"
        ></path>
      </g>
    </svg>
  ),
  prisma: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="-27 0 310 310"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path
          d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  ),
  nextAuth: (props: IconProps) => (
    <svg
      width="210"
      height="232"
      viewBox="0 0 210 232"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M208.687 31.859L30.0947 167.73C8.16388 127.966 0.567559 79.9975 0 51.2275V33.6181C0 31.0567 2.7788 29.5628 4.16851 29.1356C33.5617 20.2778 93.2465 2.30524 96.8378 1.28069C100.429 0.256138 103.464 0 104.534 0H104.631C105.7 0 108.735 0.256138 112.327 1.28069C115.918 2.30524 175.603 20.2778 204.996 29.1356C206.03 29.4533 207.832 30.3613 208.687 31.859Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.0938 167.952L208.686 32.0815C208.981 32.5983 209.164 33.1842 209.164 33.8406V51.45C208.202 100.223 187.038 204.172 110.081 229.786C109.013 230.213 106.49 231.067 104.951 231.067H104.212C102.673 231.067 100.15 230.213 99.0814 229.786C67.5193 219.281 45.3415 195.6 30.0938 167.952Z"
        fill="currentColor"
      />
      <path
        d="M111.74 1.28325C108.147 0.25665 105.11 0 104.04 0L103.719 231.305H104.361C105.901 231.305 108.425 230.45 109.494 230.022C186.489 204.357 207.663 100.2 208.625 51.3299V33.6853C208.625 31.1188 205.845 29.6216 204.454 29.1939C175.047 20.3181 115.333 2.30985 111.74 1.28325Z"
        fill="url(#paint2_linear_128_61)"
        fillOpacity="0.21"
      />
      <ellipse
        cx="104.905"
        cy="114.209"
        rx="47.801"
        ry="47.4802"
        fill="#E3E2FA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96.2435 124.475C92.6077 124.796 83.4111 123.192 78.9197 119.342C74.0971 115.208 71.541 109.718 71.541 101.697C71.541 91.7469 80.5239 81.1654 93.0355 81.4861C104.919 81.7907 112.934 88.4894 114.53 99.1307C115.363 104.684 114.514 107.353 113.854 109.426C113.752 109.749 113.654 110.057 113.568 110.359C113.247 111.429 112.798 113.76 113.568 114.53C114.337 115.3 126.079 126.614 131.854 132.174C132.388 132.816 133.458 134.42 133.458 135.703V141.799C133.458 142.761 133.201 143.082 132.175 143.082H119.342C118.594 142.975 117.096 142.248 117.096 140.195C117.096 138.006 116.863 137.684 116.396 137.039C116.316 136.928 116.228 136.807 116.134 136.666C115.492 135.703 114.209 135.703 112.926 135.703C111.643 135.703 110.68 135.382 110.039 134.741C109.397 134.099 109.397 133.137 109.718 131.854C110.039 130.57 109.718 129.287 109.076 128.966C108.974 128.915 108.856 128.848 108.723 128.772C108.019 128.372 106.896 127.734 105.547 128.004C103.943 128.325 101.697 128.004 100.414 126.721C99.131 125.437 97.5267 124.401 96.2435 124.475ZM87.5814 100.094C90.2391 100.094 92.3936 97.9393 92.3936 95.2816C92.3936 92.6239 90.2391 90.4694 87.5814 90.4694C84.9237 90.4694 82.7692 92.6239 82.7692 95.2816C82.7692 97.9393 84.9237 100.094 87.5814 100.094Z"
        fill="currentColor"
      />
    </svg>
  ),
  playwright: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.34em"
      height="1em"
      viewBox="0 0 256 192"
      {...props}
    >
      <path
        fill="#2d4552"
        d="M84.38 108.352c-9.556 2.712-15.826 7.467-19.956 12.218c3.956-3.461 9.255-6.639 16.402-8.665c7.311-2.072 13.548-2.057 18.702-1.062v-4.03c-4.397-.402-9.437-.082-15.148 1.539M63.987 74.475l-35.49 9.35s.646.914 1.844 2.133l30.092-7.93s-.427 5.495-4.13 10.41c7.005-5.299 7.684-13.963 7.684-13.963m29.709 83.41c-49.946 13.452-76.37-44.43-84.37-74.472c-3.696-13.868-5.31-24.37-5.74-31.148a11.5 11.5 0 0 1 .025-1.84C1.021 50.58-.22 51.927.032 55.82c.43 6.773 2.044 17.275 5.74 31.147c7.997 30.038 34.424 87.92 84.37 74.468c10.871-2.929 19.038-8.263 25.17-15.073c-5.652 5.104-12.724 9.123-21.616 11.523M103.08 39.05v3.555h19.59c-.401-1.259-.806-2.393-1.208-3.555z"
      />
      <path
        fill="#2d4552"
        d="M127.05 68.325c8.81 2.503 13.47 8.68 15.933 14.146l9.824 2.79s-1.34-19.132-18.645-24.047c-16.189-4.6-26.151 8.995-27.363 10.754c4.71-3.355 11.586-6.102 20.251-3.643m78.197 14.234c-16.204-4.62-26.162 9.003-27.356 10.737c4.713-3.351 11.586-6.099 20.247-3.629c8.797 2.506 13.452 8.676 15.923 14.146l9.837 2.8s-1.361-19.135-18.651-24.054m-9.76 50.443l-81.718-22.845s.885 4.485 4.279 10.293l68.803 19.234c5.664-3.277 8.636-6.682 8.636-6.682m-56.655 49.174C74.127 164.828 81.949 82.386 92.419 43.32c4.311-16.1 8.743-28.066 12.419-36.088c-2.193-.451-4.01.704-5.804 4.354C95.13 19.5 90.14 32.387 85.312 50.427c-10.467 39.066-18.29 121.506 46.412 138.854c30.497 8.17 54.256-4.247 71.966-23.749c-16.81 15.226-38.274 23.763-64.858 16.644"
      />
      <path
        fill="#e2574c"
        d="M103.081 138.565v-16.637l-46.223 13.108s3.415-19.846 27.522-26.684c7.311-2.072 13.549-2.058 18.701-1.063V39.05h23.145c-2.52-7.787-4.958-13.782-7.006-17.948c-3.387-6.895-6.859-2.324-14.741 4.269c-5.552 4.638-19.583 14.533-40.698 20.222c-21.114 5.694-38.185 4.184-45.307 2.95c-10.097-1.742-15.378-3.96-14.884 3.721c.43 6.774 2.043 17.277 5.74 31.148c7.996 30.039 34.424 87.92 84.37 74.468c13.046-3.515 22.254-10.464 28.637-19.32h-19.256zm-74.588-54.74l35.494-9.35s-1.034 13.654-14.34 17.162c-13.31 3.504-21.154-7.812-21.154-7.812"
      />
      <path
        fill="#2ead33"
        d="M236.664 39.84c-9.226 1.617-31.361 3.632-58.716-3.7c-27.363-7.328-45.517-20.144-52.71-26.168c-10.197-8.54-14.682-14.476-19.096-5.498c-3.902 7.918-8.893 20.805-13.723 38.846c-10.466 39.066-18.289 121.505 46.413 138.853c64.687 17.333 99.126-57.978 109.593-97.047c4.83-18.037 6.948-31.695 7.53-40.502c.665-9.976-6.187-7.08-19.29-4.784M106.668 72.161s10.196-15.859 27.49-10.943c17.305 4.915 18.645 24.046 18.645 24.046zm42.215 71.163c-30.419-8.91-35.11-33.167-35.11-33.167l81.714 22.846c0-.004-16.494 19.12-46.604 10.32m28.89-49.85s10.183-15.847 27.474-10.918c17.29 4.923 18.651 24.054 18.651 24.054z"
      />
      <path
        fill="#d65348"
        d="m86.928 126.51l-30.07 8.522s3.266-18.609 25.418-25.983L65.25 45.147l-1.471.447c-21.115 5.694-38.185 4.184-45.307 2.95c-10.097-1.741-15.379-3.96-14.885 3.722c.43 6.774 2.044 17.276 5.74 31.147c7.997 30.039 34.425 87.92 84.37 74.468l1.471-.462zM28.493 83.825l35.494-9.351s-1.034 13.654-14.34 17.162c-13.31 3.504-21.154-7.811-21.154-7.811"
      />
      <path
        fill="#1d8d22"
        d="m150.255 143.658l-1.376-.335c-30.419-8.91-35.11-33.166-35.11-33.166l42.137 11.778l22.308-85.724l-.27-.07c-27.362-7.329-45.516-20.145-52.71-26.17c-10.196-8.54-14.682-14.475-19.096-5.497c-3.898 7.918-8.889 20.805-13.719 38.846c-10.466 39.066-18.289 121.505 46.413 138.852l1.326.3zM106.668 72.16s10.196-15.859 27.49-10.943c17.305 4.915 18.645 24.046 18.645 24.046z"
      />
      <path
        fill="#c04b41"
        d="m88.46 126.072l-8.064 2.289c1.906 10.74 5.264 21.047 10.534 30.152c.918-.202 1.828-.376 2.762-.632c2.449-.66 4.72-1.479 6.906-2.371c-5.89-8.74-9.785-18.804-12.137-29.438m-3.148-75.644c-4.144 15.467-7.852 37.73-6.831 60.06c1.826-.793 3.756-1.532 5.9-2.14l1.492-.334c-1.82-23.852 2.114-48.157 6.546-64.694a323 323 0 0 1 3.373-11.704a105 105 0 0 1-5.974 3.547a307 307 0 0 0-4.506 15.265"
      />
    </svg>
  ),
  vercel: (props: IconProps) => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M31.9914 4L63.9828 59.4113H0L31.9914 4Z" fill="currentColor" />
    </svg>
  ),
};

export default Icons;