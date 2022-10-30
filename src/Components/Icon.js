import React from 'react';

function Icon(props) {
    const { name, color, ...otherProps } = props;
    switch(name) {
        case 'add' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><rect fill={color} x="22" y="6" width="5" height="37"/><rect fill={color} x="22" y="6" width="5" height="37" transform="translate(0 49) rotate(-90)"/></svg>)
        case 'arrow_down' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="3.09 14.05 25 35.95 46.91 14.05 3.09 14.05"/></svg>)
        case 'arrow_left' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="32.8 3.59 10.89 25.5 32.8 47.41 32.8 3.59"/></svg>)
        case 'arrow_right' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="14.05 47.41 35.95 25.5 14.05 3.59 14.05 47.41"/></svg>)
        case 'arrow_up' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="46.95 35.95 25.05 14.05 3.14 35.95 46.95 35.95"/></svg>)
        case 'check' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><g><circle cx="25" cy="25" r="22.5" style={{fill:"#144a00"}}/><path d="M25,5c11.03,0,20,8.97,20,20s-8.97,20-20,20S5,36.03,5,25,13.97,5,25,5m0-5C11.19,0,0,11.19,0,25s11.19,25,25,25,25-11.19,25-25S38.81,0,25,0h0Z" style={{fill:"#012a00"}}/></g><g><g><rect x="15.33" y="28.37" width=".55" height="10.35" transform="translate(-19.15 20.86) rotate(-45)" style={{fill:"#144a00"}}/><polygon points="12.14 26.15 8.22 30.08 19.07 40.93 22.99 37.01 12.14 26.15 12.14 26.15" style={{fill:"#012a00"}}/></g><g><rect x="15.09" y="27.45" width="25.91" height=".55" transform="translate(-11.39 27.95) rotate(-45)" style={{fill:"#144a00"}}/><polygon points="37.01 14.83 15.16 36.69 19.08 40.61 40.94 18.76 37.01 14.83 37.01 14.83" style={{fill:"#012a00"}}/></g></g></svg>)
        case 'close' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><rect fill={color} x="22" y="6" width="5" height="37" transform="translate(-10.15 24.5) rotate(-45)"/><rect fill={color} x="22" y="6" width="5" height="37" transform="translate(24.5 59.15) rotate(-135)"/></svg>)
        case 'edit' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon  fill={color} points="29 13.19 11.66 31.2 8.35 43.29 20.31 39.53 37.65 21.52 29 13.19"/><rect fill={color} x="31.83" y="7.17" width="12" height="11" transform="translate(19.37 -22.7) rotate(43.91)"/></svg>)
        case 'error' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><g><circle cx="25" cy="25" r="22.5" style={{fill:"#c1272d"}}/><path d="M25,5c11.03,0,20,8.97,20,20s-8.97,20-20,20S5,36.03,5,25,13.97,5,25,5m0-5C11.19,0,0,11.19,0,25s11.19,25,25,25,25-11.19,25-25S38.81,0,25,0h0Z" style={{fill:"#3f0001"}} /></g><g><g><rect x="24.84" y="12.09" width=".55" height="25.91" transform="translate(-10.35 25.09) rotate(-45)" style={{fill:"#c1272d"}} /><polygon points="16.14 12.15 12.22 16.08 34.08 37.93 38 34.01 16.14 12.15 16.14 12.15" style={{fill:"#3f0001"}} /></g><g><rect x="12.09" y="24.45" width="25.91" height=".55" transform="translate(-10.15 24.95) rotate(-45)" style={{fill:"#c1272d"}}/><polygon points="34.01 11.83 12.16 33.69 16.08 37.61 37.94 15.76 34.01 11.83 34.01 11.83" style={{fill:"#3f0001"}} /></g></g></svg>)
        case 'home' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><polygon fill={color} points="47.78 28 25.87 6.09 3.97 28 47.78 28"/><g><rect x="11.5" y="29.5" width="28" height="14"/><path  fill={color} d="M37,32v9H14v-9h23m5-5H9v19H42V27h0Z"/></g><rect x="21" y="35" width="9" height="12" style={{fill:"#fff"}} /><rect fill={color} x="33.98" y="9.16" width="6.02" height="12"/></svg>)
        case 'info' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><g><circle cx="25" cy="25" r="22.5" style={{fill:"#003db4"}}/><path d="M25,5c11.03,0,20,8.97,20,20s-8.97,20-20,20S5,36.03,5,25,13.97,5,25,5m0-5C11.19,0,0,11.19,0,25s11.19,25,25,25,25-11.19,25-25S38.81,0,25,0h0Z" style={{fill:"#000b35"}} /></g><g><rect x="23.5" y="24.5" width="3" height="12" style={{fill:"#003db4"}}/><polygon points="29 22 21 22 21 39 29 39 29 22 29 22" style={{fill:"#000b35"}}/></g><g><circle cx="25" cy="15" r="2.5" style={{fill:"#003db4"}}/><path d="M25,15h0s0,0,0,0m0-5c-2.76,0-5,2.24-5,5s2.24,5,5,5,5-2.24,5-5-2.24-5-5-5h0Z" style={{fill:"#000b35"}}/></g><g><rect x="17" y="22" width="5" height="2" style={{fill:"#003db4"}}/><polygon points="22 22 17 22 17 24 22 24 22 22 22 22" style={{fill:"#000b35"}}/></g><g><rect x="19" y="38" width="13" height="1" style={{fill:"#003db4"}}/><polygon points="32 38 19 38 19 39 32 39 32 38 32 38" style={{fill:"#000b35"}}/></g></svg>)
        case 'link' :
            return(<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 50 50"}><rect x="21.02" y="2.71" width="15.22" height="28.38" rx="7.61" ry="7.61" transform="translate(18.53 -14.78) rotate(41.77)" style={{fill:"none", stroke:color, strokeMiterlimit:10, strokeWidth:"4px"}} /><rect x="15.73" y="19.33" width="15.22" height="28.38" rx="7.61" ry="7.61" transform="translate(28.26 -7.03) rotate(41.77)" style={{fill:"none", stroke:color, strokeMiterlimit:10, strokeWidth:"4px"}} /></svg>)
        default :
        return (
            <div>
                Not an icon.
            </div>
        );
    }
    
}

export default Icon;