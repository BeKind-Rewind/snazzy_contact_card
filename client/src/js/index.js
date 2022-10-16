import "./form";
import "./submit";

import "../css/index.css";

import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import { getDb, initDb, postDb } from "./database";


window.addEventListener('load', function () {
  initDb();
  // getDb();
  // postDb("IamtheWURST", "iamthewurst@gmail.com", 4438483223, "Bear");
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

