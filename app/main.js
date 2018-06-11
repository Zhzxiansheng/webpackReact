import React from 'react'
import {render} from 'react-dom'
import Greeter from "./Greeter";

import './css/main.css'; //使用require 导入css文件

render(<Greeter />,document.querySelector("#app"));
