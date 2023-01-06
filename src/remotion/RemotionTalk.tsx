import {AbsoluteFill, Freeze, Img, Sequence, staticFile} from "remotion";
import {LottieAsset} from "../components/LottieAsset";
import {loadFont} from '@remotion/google-fonts/ConcertOne';

const {fontFamily} = loadFont("normal", {
    weights: ["400"],
});

export const RemotionTalk: React.FC = () => {
    return (
        <AbsoluteFill style={{
            backgroundColor: '#1b1b1d',
            overflow: 'hidden',
        }}>
            <Sequence durationInFrames={60} name="Curtain" style={{zIndex: 1}}>
                <LottieAsset assetLink="lf20_aFWRHHfmvU" direction="forward" style={{
                    position: 'absolute',
                    top: -250,
                    left: 0,
                    width: '100%',
                    objectFit: 'cover',
                }}/>
            </Sequence>
            <Sequence name="Informations">
                <Img
                    style={{
                        position: 'absolute',
                        top: 380,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '200px',
                        height: '200px',
                    }}
                    src="https://github.com/remotion-dev/logo/blob/main/logowhite/element-0.png?raw=true"
                />
                <span
                    style={{
                        fontFamily,
                        position: 'absolute',
                        top: 700,
                        width: '100%',
                        textAlign: 'center',
                        color: '#E3E3E3',
                        paddingLeft: 250,
                        paddingRight: 250,
                        fontSize: 65,
                        fontSmooth: 'always',
                    }}
                >
                    <span style={{color: '#0b84f3'}}>Remotion : </span>le 7ème art à portée de composants web et d&apos;API 🎬
                </span>
                <div
                    style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 50,
                    }}
                >
                    <Img
                        style={{
                            height: '60px',
                        }}
                        src={staticFile('/images/tnt.png')}
                    />
                    <Img
                        style={{
                            height: '100px',
                        }}
                        src={staticFile('/images/snowcamp.png')}
                    />
                </div>
            </Sequence>
            <Sequence from={30} name="Particles">
                <LottieAsset assetLink="lf20_rbyisvbr" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    objectFit: 'cover',
                }}/>
            </Sequence>
            <Sequence from={60} durationInFrames={60} name="Curtain-Freeze"  style={{zIndex: 1}}>
                <Freeze frame={60}>
                    <LottieAsset assetLink="lf20_aFWRHHfmvU" direction="forward" style={{
                        position: 'absolute',
                        top: -250,
                        left: 0,
                        width: '100%',
                    }}/>
                </Freeze>
            </Sequence>
            <Sequence from={119} durationInFrames={61} name="Curtain">
                <LottieAsset assetLink="lf20_aFWRHHfmvU" direction="backward" style={{
                    position: 'absolute',
                    top: -250,
                    left: 0,
                    width: '100%',
                    zIndex: 2,
                }}/>
            </Sequence>
        </AbsoluteFill>
    );
};
