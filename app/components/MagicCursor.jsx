"use client";

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const MagicCursor = () => {
    const cursorRef = useRef(null);
    const textRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const stick = useRef(null);
    const visible = useRef(false);
    const visibleInt = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const text = textRef.current;

        const move = (x, y, duration = 0.7) => {
            gsap.to(cursor, {
                x: x ?? pos.current.x,
                y: y ?? pos.current.y,
                force3D: true,
                overwrite: true,
                ease: "expo.out",
                duration: visible.current ? duration : 0
            });
        };

        const show = () => {
            if (visible.current) return;
            if (visibleInt.current) clearTimeout(visibleInt.current);
            cursor.classList.add('-visible');
            visibleInt.current = setTimeout(() => (visible.current = true), 10);
        };

        const hide = () => {
            if (visibleInt.current) clearTimeout(visibleInt.current);
            cursor.classList.remove('-visible');
            visibleInt.current = setTimeout(() => (visible.current = false), 300);
        };

        const update = () => {
            move();
            show();
        };

        const setState = (state) => {
            if (state) cursor.classList.add(state);
        };

        const removeState = (state) => {
            if (state) cursor.classList.remove(state);
        };

        const setText = (content) => {
            text.innerHTML = content;
            cursor.classList.add('-text');
        };

        const removeText = () => {
            cursor.classList.remove('-text');
        };

        const setStick = (elSelector) => {
            const target = document.querySelector(elSelector);
            if (target) {
                const bound = target.getBoundingClientRect();
                stick.current = {
                    y: bound.top + target.offsetHeight / 2,
                    x: bound.left + target.offsetWidth / 2
                };
                move(stick.current.x, stick.current.y, 0.5);
            }
        };

        const removeStick = () => {
            stick.current = null;
        };

        // Event Listeners
        const handleMouseMove = (e) => {
            pos.current = {
                x: stick.current ? stick.current.x - (stick.current.x - e.clientX) * 0.15 : e.clientX,
                y: stick.current ? stick.current.y - (stick.current.y - e.clientY) * 0.15 : e.clientY
            };
            update();
        };

        const handleMouseEnterWindow = () => show();
        const handleMouseLeaveWindow = () => hide();

        const handleMouseDown = () => setState('-active');
        const handleMouseUp = () => removeState('-active');

        // Global delegation for interactions
        const handleInteractionEnter = (e) => {
            const target = e.target.closest('a, input, textarea, button, [data-cursor], [data-cursor-text], [data-cursor-stick], iframe');
            if (!target) return;

            if (target.tagName === 'IFRAME') {
                hide();
            } else if (['A', 'INPUT', 'TEXTAREA', 'BUTTON'].includes(target.tagName)) {
                setState('-pointer');
            }

            if (target.dataset.cursor) {
                setState(target.dataset.cursor);
            }
            if (target.dataset.cursorText) {
                setText(target.dataset.cursorText);
            }
            if (target.dataset.cursorStick) {
                setStick(target.dataset.cursorStick);
            }
        };

        const handleInteractionLeave = (e) => {
            const target = e.target.closest('a, input, textarea, button, [data-cursor], [data-cursor-text], [data-cursor-stick], iframe');
            if (!target) return;

            if (target.tagName === 'IFRAME') {
                show();
            } else if (['A', 'INPUT', 'TEXTAREA', 'BUTTON'].includes(target.tagName)) {
                removeState('-pointer');
            }

            if (target.dataset.cursor) {
                removeState(target.dataset.cursor);
            }
            if (target.dataset.cursorText) {
                removeText();
            }
            if (target.dataset.cursorStick) {
                removeStick();
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnterWindow);
        document.body.addEventListener('mouseleave', handleMouseLeaveWindow);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleInteractionEnter);
        document.addEventListener('mouseout', handleInteractionLeave);

        // Initial position
        gsap.set(cursor, { x: -window.innerWidth, y: -window.innerHeight });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnterWindow);
            document.body.removeEventListener('mouseleave', handleMouseLeaveWindow);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleInteractionEnter);
            document.removeEventListener('mouseout', handleInteractionLeave);
            if (visibleInt.current) clearTimeout(visibleInt.current);
        };
    }, []);

    // Reset cursor on route change
    const pathname = usePathname();
    useEffect(() => {
        // Clear all states
        cursorRef.current?.classList.remove('-text', '-pointer', '-active', '-visible');
        if (textRef.current) textRef.current.innerHTML = '';
        stick.current = null;
    }, [pathname]);

    return (
        <div className="cb-cursor" ref={cursorRef}>
            <div className="cb-cursor-text" ref={textRef}></div>
        </div>
    );
};

export default MagicCursor;
