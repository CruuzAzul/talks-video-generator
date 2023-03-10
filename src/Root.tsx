import {Composition, Folder} from 'remotion';
import {RemotionTalk} from "./remotion/RemotionTalk";
import {AppwriteTalk} from "./appwrite/AppwriteTalk";

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Folder name="Remotion">
				<Composition
					component={RemotionTalk}
					width={1200}
					height={1200}
					id="RemotionTalk"
					fps={30}
					durationInFrames={180}
				/>
			</Folder>
			<Folder name="Appwrite">
				<Composition
					component={AppwriteTalk}
					width={1200}
					height={1200}
					id="AppwriteTalk"
					fps={30}
					durationInFrames={150}
				/>
			</Folder>
		</>
	);
};
