import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./Home";
import JSXExpressions from "./JSXExpressions";
import NotFound from "./NotFound";
import Events from "./Events";
import Parent from "./props/Parent";
import Timer from "./Timer";
import Tester from "./Lc/Tester";
import Wrapper from "./error/Wrapper";
import WSDemo from "./WSDemo";
import FormsWrapper from "./forms/FormsWrapper";
import HooksWrapper from "./hooks/HooksWrapper";

	
export default function Navigation() {
    return (
      <Router>
        <>
          {/* links for routing*/}
          <div className="p-2">
            <section className="p-1 border border-secondary rounded">
              <nav className="nav nav-pills nav-justified">
                <NavLink to="home" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="jsxexpressions" className="nav-link">
                  JSXExpressions
                </NavLink>
                <NavLink to="Events" className="nav-link">
                  Events
                </NavLink>
                <NavLink to="props" className="nav-link">
                  Props
                </NavLink>
                <NavLink to="state" className="nav-link">
                  State
                </NavLink>
                <NavLink to="lc" className="nav-link">
                  LC
                </NavLink>
                <NavLink to="error" className="nav-link">
                  EB
                </NavLink>
                <NavLink to="ws" className="nav-link">
                  WS
                </NavLink>
                <NavLink to="forms" className="nav-link">
                  Forms
                </NavLink>
                <NavLink to="hooks" className="nav-link">
                  Hooks
                </NavLink>
              </nav>
            </section>
          </div>
          {/* routing between paths */}
			<div className="p-2">
			  <section className="p-1 border border-secondary rounded">
				<Routes>
				  <Route path="home" element={<Home />} />
				  <Route path="jsxexpressions" element={<JSXExpressions />} />
          <Route path="Events" element={<Events />} />
          <Route path="Props" element={<Parent />} />
          <Route path="state" element={<Timer />} />
          <Route path="LC" element={<Tester />} />
          <Route path="error" element={<Wrapper />} />
          <Route path="ws" element={<WSDemo />} />
          <Route path="forms" element={<FormsWrapper />} />
          <Route path="hooks" element={<HooksWrapper />} />
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="*" element={<NotFound />} />
				</Routes>
			  </section>
			</div>
        </>
      </Router>
    );
  }
  
