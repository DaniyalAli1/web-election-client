import { TiHome } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";
import { FaPoll } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaVoteYea } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

export const navLinks = [
    {name: 'Home', path: '/', icon:<TiHome />},
    {name: 'Registration', path: '/registration', icon:<TiUserAdd />},
    {name: 'Admin', path: '/admin', icon:<MdDashboard />},
    {name: 'Elections', path: '/elections', icon:<FaPoll />},
    {name: 'Candidate', path: '/candidate', icon:<IoIosPeople />},
    {name: 'Voting', path: '/voting', icon:<FaVoteYea />},
    
    {name: 'Profile', path: '/profile', icon:<CgProfile />},
]