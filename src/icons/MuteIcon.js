import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

function MuteIcon(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={25} height={25} rx={5} fill="#74DEFF" />
      <G clipPath="url(#clip0_1182_1058)">
        <Path
          d="M12.675 4.2c-.364 0-.742.175-1.05.488l-4.65 4.637c-.256.227-.375.666-.375.975v5.4c0 .306.127.744.363.95l4.637 4.625c.422.43.81.525 1.063.525.667 0 1.137-.61 1.137-1.475v-14.8c0-.91-.584-1.325-1.125-1.325zM4.2 9.388c-.67 0-1.213.542-1.213 1.212v4.8c0 .67.543 1.213 1.213 1.213h1.787A2.454 2.454 0 015.8 15.7v-5.4c0-.262.066-.595.2-.912H4.2zm11.563 1.2a.457.457 0 00-.05.012.397.397 0 00-.313.281.402.402 0 00.112.407L17.226 13l-1.713 1.713a.405.405 0 000 .575c.16.16.416.16.575 0l1.713-1.713 1.712 1.713c.16.16.416.16.575 0a.405.405 0 000-.575L18.375 13l1.712-1.712c.13-.12.165-.311.086-.47a.398.398 0 00-.423-.218.403.403 0 00-.238.113L17.8 12.425l-1.713-1.712a.401.401 0 00-.325-.125z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1182_1058">
          <Path fill="#fff" transform="translate(3 3)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default MuteIcon;