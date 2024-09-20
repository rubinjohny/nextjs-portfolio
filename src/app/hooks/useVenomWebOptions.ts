
import { useMemo } from "react";
import { useWidth } from "@/app/hooks/useWindowWidth";
import { useTheme } from "next-themes";

import { type ISourceOptions } from "@tsparticles/engine";

export interface Options extends ISourceOptions {
    polygon:{
        draw?: {
            enable: boolean;
            stroke: {
                color:string;
                width: number;
                opacity: number;
            }
        }
        move: {
            radius: number;
        }
        type:"inline"
        inline:{
            arrangement:"equidistant"
        }
        url: string
        scale: number;
        position:{
            x: number;
            y: number;
        }
    }
};


export const useVenomWebOptions = () => {

    const {isMobile, isTablet, isLaptop, isDesktop, width} = useWidth();
    const {theme} = useTheme();

    const options: Options = useMemo(() => {


        const defaultOptions: Options = {
            fpsLimit: 30,
            fullScreen: false,
            particles: {
                color: {
                    value: theme === "light" ? "#272727" : "#fff",
                },
                size: {
                    value: 1,
                },
                links: {
                    blink: true,
                    distance: 30,
                    enable: true,
                    opacity: 0.7,
                    consent:true,
                    color: theme === "light" ? "#272727" : "#fff",
                    width: 2,
                },
                move: {
                    enable: true,
                    outModes: "bounce",
                    speed: {
                        min: 0.1,
                        max: 0.2 },
                },
                number: {
                    value: 1000,
                },
            },
            polygon: {
                move: {
                    radius: 3,
                },
                inline: {
                    arrangement: "equidistant",
                },
                type: "inline",
                url: "/rubin-johny.svg",
                scale: 1.75,
                position: {
                   x: 97 - (width/100) , y: 82
                },
            },
        }



        const mobileOptions = {
            ...defaultOptions,
            particles: { ...defaultOptions.particles, number: { value: 120 }},
            polygon: {...defaultOptions.polygon, url: "/r-j.svg", scale: 2, position: { x: 10 + (width - 320)/10, y: 10 }, move: { radius: 4} },
        };

        const tabletOptions = {
            ...defaultOptions,
            particles: {
                ...defaultOptions.particles,
                number: { value: 450 },
            },
            polygon: {...defaultOptions.polygon, scale: 0.9, position: { x: 80 - (width - 768)/30 , y: 80 }, move: { radius: 3} },
        }

        const laptopOptions = {
            ...defaultOptions,
            particles: {
                ...defaultOptions.particles,
                number: { value: 500 },
            },
            polygon: {...defaultOptions.polygon, scale: 1, position: { x: 75 - (width - 1024)/50 , y: 85 }, move: { radius: 3} },
        }

        const smallDesktopOptions = {
            ...defaultOptions,
            particles: {
                ...defaultOptions.particles,
                number: { value: 800 },
            },
            polygon: {...defaultOptions.polygon, scale: 1.4, position: { x: 92 - (width/90) , y: 90 }, move: { radius: 3} },
        }

        const largeDesktopOptions = {
            ...defaultOptions,
            particles:{
                ...defaultOptions.particles,
                number: { value: 1000 },

            },
            polygon: {...defaultOptions.polygon, scale: 1.75, position: { x: 92 - (width/100) , y: 80 }, move: { radius: 3} },
        }

        if (isMobile) return mobileOptions
        else if(isTablet) return tabletOptions
        else if(isLaptop) return laptopOptions
        else if(isDesktop && width <= 1500) return smallDesktopOptions
        else if(isDesktop && width > 1500) return largeDesktopOptions
        else return { ...defaultOptions };
    }, [isMobile, width, theme]);

    return {options};
}


