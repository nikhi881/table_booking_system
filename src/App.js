import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home,AboutUs,Menu,Reservations,OrderOnline,Login,NoPage } from "./components";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route index element={<Home />} />
					<Route path="aboutus" element={<AboutUs />} />
					<Route path="menu" element={<Menu />} />
					<Route path="reservations" element={<Reservations />} />
					<Route path="orderonline" element={<OrderOnline />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
