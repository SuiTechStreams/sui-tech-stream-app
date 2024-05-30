import { TransactionBlock } from '@mysten/sui.js/transactions';
import { PACKAGE_ID, SUI_CLIENT } from "./suiClient";
import { AuthService } from "./authService";
import { MIST_PER_SUI, SUI_CLOCK_OBJECT_ID } from "@mysten/sui.js/utils";
import { ICreateProfile, IComment, ICreateVideo, IDeleteComment, IFollow, ILike, ISetBio, ISetPfp, ISetUsername, ITips, IUnfollow, IUnlike, IWithdrawTip, IisFollowing } from '@/types';

// a service to interact with the smart contract using SUI SDK



export class ChainTubeService {

    async create_profile({username, bio, pfp}: ICreateProfile) {
        const txb = new TransactionBlock();
        const txData = {// notes is name of contract, replace it
            target: `${PACKAGE_ID}::profile::create_profile`,
            arguments: [
                txb.pure.string(username),
                txb.pure.string(bio),
                txb.pure.string(pfp),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async tip({profileId, amountInSui}: ITips) {
        const txb = new TransactionBlock();
        let [coin] = txb.splitCoins(txb.gas, [amountInSui * Number(MIST_PER_SUI)]);

        const txData = {// notes is name of contract, replace it
            target: `${PACKAGE_ID}::profile::tip`,
            arguments: [
                txb.object(profileId),
                coin,
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async isFollowing({Arg0, Arg1}: IisFollowing) {
        const txb = new TransactionBlock();
        const txData = {// notes is name of contract, replace it
            target: `${PACKAGE_ID}::profile::isFollowing`,
            arguments: [
                txb.pure.string(Arg0),
                txb.pure.string(Arg1),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async follow({profileId, profileCapId, profileIdFollow}: IFollow) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::profile::follow`,
            arguments: [
                txb.object(profileId),
                txb.object(profileCapId),
                txb.pure.string(profileIdFollow),
                txb.object(SUI_CLOCK_OBJECT_ID),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async unfollow({profileId, profileCapId, profileIdUnFollow}: IUnfollow) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::profile::unfollow`,
            arguments: [
                txb.pure.string(profileId),
                txb.pure.string(profileCapId),
                txb.pure.string(profileIdUnFollow),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }
    async withdraw_tip({ profileId, profileCapId, currentAccount }: IWithdrawTip) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::profile::withdraw_tip`,
            arguments: [
                txb.object(profileId),
                txb.object(profileCapId),
            ]
        };
        //txb.transferObjects([coin], currentAccount);
        return this.makeMoveCall(txData, txb);
    }

    async set_username({profileId, profileCapId, username}: ISetUsername) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::profile::set_username`,
            arguments: [
                txb.object(profileId),
                txb.object(profileCapId),
                txb.pure.string(username),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async set_pfp({profileId, profileCapId, pfp}: ISetPfp) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::profile::set_pfp`,
            arguments: [
                txb.object(profileId),
                txb.object(profileCapId),
                txb.pure.string(pfp),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async set_bio({profileId, profileCapId, bio}: ISetBio) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::profile::set_bio`,
            arguments: [
                txb.object(profileId),
                txb.object(profileCapId),
                txb.pure.string(bio),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async create_video({profileCapId, url, length}: ICreateVideo) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::video::create_video`,
            arguments: [
                txb.object(profileCapId),
                txb.pure.string(url),
                txb.pure.u64(length),
                txb.object(SUI_CLOCK_OBJECT_ID),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async like({videoStatsId, profileCapId}: ILike) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::video::like`,
            arguments: [
                txb.object(videoStatsId),
                txb.object(profileCapId),
                txb.object(SUI_CLOCK_OBJECT_ID),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async unlike({videoStatsId, profileCapId}: IUnlike) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::video::unlike`,
            arguments: [
                txb.object(videoStatsId),
                txb.object(profileCapId),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async comment({videoStatsId, profileCapId, text}: IComment) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::video::comment`,
            arguments: [
                txb.object(videoStatsId),
                txb.object(profileCapId),
                txb.pure.string(text),
                txb.object(SUI_CLOCK_OBJECT_ID),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async getVideos() {
        const sender = AuthService.walletAddress();
        let ownedObjects = await SUI_CLIENT.getOwnedObjects({
            owner: sender
        });
        let ownedObjectsDetails = await Promise.all(ownedObjects.data.map(async (obj) => {
            if(obj.data)
                return await SUI_CLIENT.getObject({ id: obj.data.objectId, options: { showType: true, showContent: true } });
        }));
        /**return ownedObjectsDetails.filter(obj => {
            return `${PACKAGE_ID}::notes::Note` === obj.data && obj.data.type
        }).map(obj => { if (obj && obj.data && obj.data.content) obj.data.content['fields'] });*/
    }

    async delete_profile(profileId: string, profileCapId: string ) {
        const sender = AuthService.walletAddress();
        const txb = new TransactionBlock();
        txb.setSender(sender);
        const txData = {
            target: `${PACKAGE_ID}::profile::delete_profile`,
            arguments: [
                txb.object(profileId),
                txb.object(profileCapId),
            ]
        };
        await this.makeMoveCall(txData, txb);
    }

    async delete_comment({ videoStatsId, profileCapId, commentId }: IDeleteComment) {
        const sender = AuthService.walletAddress();
        const txb = new TransactionBlock();
        txb.setSender(sender);
        const txData = {
            target: `${PACKAGE_ID}::video::delete_comment`,
            arguments: [
                txb.object(videoStatsId),
                txb.object(profileCapId),
                txb.object(commentId),
            ]
        };
        await this.makeMoveCall(txData, txb);
    }

    private async makeMoveCall(txData: any, txb: TransactionBlock) {
        const keypair = AuthService.getEd25519Keypair();
        const sender = AuthService.walletAddress()
        txb.setSender(sender);
        txb.setGasBudget(100000000)
        const [coin] = txb.moveCall(txData);

        const { bytes, signature: userSignature } = await txb.sign({
            client: SUI_CLIENT,
            signer: keypair,
        });
        coin && txb.transferObjects([coin], sender);
        const zkLoginSignature = await AuthService.generateZkLoginSignature(userSignature);
        const transaction1 = SUI_CLIENT.executeTransactionBlock({
            transactionBlock: bytes,
            signature: zkLoginSignature,
        });

        console.log("Create profile ======", transaction1);
        return transaction1;
    }

    async getSuiMessageCall() {
        const keypair = AuthService.getEd25519Keypair();
        const sender = AuthService.walletAddress();
        const txb = new TransactionBlock();
        txb.setSender(sender);
        const { bytes, signature: userSignature } = await txb.sign({
            client: SUI_CLIENT,
            signer: keypair,
        });
        const zkLoginSignature = await AuthService.generateZkLoginSignature(userSignature);
        return { signature: zkLoginSignature };
    }
}


