import {AbsoluteFill, Img, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {loadFont} from '@remotion/google-fonts/PermanentMarker';
import {LottieAsset} from "../components/LottieAsset";

const {fontFamily} = loadFont("normal", {
    weights: ["400"],
});

export const AppwriteTalk: React.FC = () => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();

    const scaleUp = spring({
        frame: frame - 10,
        fps,
        durationInFrames: 30,
    });

    const scaleUpConf = spring({
        frame: frame - 40,
        fps,
        durationInFrames: 30,
    });

    const animateRightToLeft = spring({
        frame: frame - 40,
        from: -200,
        to: -20,
        fps,
        durationInFrames: 30,
    });

    const animateLeftToRight = spring({
        frame: frame - 40,
        from: 200,
        to: 20,
        fps,
        durationInFrames: 30,
    });

    const opacityEnd = spring({
        frame: frame - 120,
        fps,
        from: 1,
        to: 0,
        durationInFrames: 60,
    });

    return (
        <AbsoluteFill style={{
            backgroundColor: '#1c223a',
            overflow: 'hidden',
            border: '4px solid #f02e65',
        }}>
            <AbsoluteFill style={{
                opacity: opacityEnd,
            }}>
                <Sequence from={10} name="Sparks">
                    <LottieAsset assetLink="lf20_iadn5gp5IP" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                    }}/>
                </Sequence>
                <Sequence name="Versus">
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 480,
                            gap: 100,
                        }}
                    >
                        <Img
                            style={{
                                width: '220px',
                                transform: `translateX(${animateRightToLeft}%)`,
                            }}
                            src={staticFile('/images/appwrite.png')}
                        />
                        <Img
                            style={{
                                height: '300px',
                                filter: 'drop-shadow(0px 0px 20px #f02e65)',
                                transform: `scale(${scaleUp})`,
                            }}
                            src={staticFile('/images/versus.png')}
                        />
                        <Img
                            style={{
                                width: '220px',
                                transform: `translateX(${animateLeftToRight}%)`,
                            }}
                            src={staticFile('/images/firebase.png')}
                        />
                    </div>
                </Sequence>
                <Sequence name="Title Talk">
                <span
                    style={{
                        fontFamily,
                        position: 'absolute',
                        top: 50,
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 80,
                        fontWeight: 700,
                        fontSmooth: 'always',
                        padding: '20px 5px',
                        margin: '0 50px',
                        textShadow: '0 0 30px #f02e65',
                        transform: `scale(${scaleUp})`,
                    }}
                >
                    Appwrite est-il prêt à éteindre Firebase ? 🔥
                </span>
                    <div
                        style={{
                            width: '100%',
                            position: 'absolute',
                            bottom: 50,
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            gap: 50,
                            transform: `scale(${scaleUpConf})`,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 30,
                            }}
                        >
                            <Img
                                style={{
                                    width: '100px',
                                }}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Circle-icons-calendar.svg/1200px-Circle-icons-calendar.svg.png"
                            />
                            <span
                                style={{
                                    fontFamily,
                                    color: 'white',
                                    fontSize: 50,
                                    fontWeight: 700,
                                    fontSmooth: 'always',
                                    textShadow: '0 0 30px #f02e65',
                                }}
                            >
                            26 janvier
                        </span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                gap: 30,
                            }}
                        >
                            <Img
                                style={{
                                    height: '100px',
                                    filter: 'drop-shadow(0px 0px 4px black)',
                                }}
                                src={staticFile('/images/snowcamp.png')}
                            />
                            <Img
                                style={{
                                    height: '100px',
                                    filter: 'drop-shadow(0px 0px 4px black)',
                                }}
                                src={staticFile('/images/vtt.png')}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: 30,
                            }}
                        >
                            <Img
                                style={{
                                    width: '100px',
                                }}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Circle-icons-calendar.svg/1200px-Circle-icons-calendar.svg.png"
                            />
                            <span
                                style={{
                                    fontFamily,
                                    color: 'white',
                                    fontSize: 50,
                                    fontWeight: 700,
                                    fontSmooth: 'always',
                                    textShadow: '0 0 30px #f02e65',
                                }}
                            >
                            2 février
                        </span>
                        </div>
                    </div>
                </Sequence>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
