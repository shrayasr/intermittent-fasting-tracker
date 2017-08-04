import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = (props) =>
    <div className="navbar">
        <div className="navbar-menu">
            <div className="navbar-start">
                {
                    props.children.map((navItem) => (
                        navItem
                    ))
                }
            </div>
        </div>
    </div>

export const NavbarLink = (props) =>
    <Link {...props} className="navbar-item" />

export const Hero = (props) =>
    <section
        className="hero is-light">
        <div
            className="hero-body">
            <Container>
                <Title {...props} />
            </Container>
        </div>
    </section>

export const Title = (props) =>
    <h1 className="title" {...props}></h1>

export const Container = (props) =>
    <div
        className="container"
        {...props}>
    </div>

export const Columns = (props) =>
    <div
        className="columns"
        {...props}>
    </div>

export const Column = (props) =>
    <div
        className="column"
        {...props}>
    </div>

export const Button = (props) =>
    <a
        className="button"
        {...props}>
    </a>