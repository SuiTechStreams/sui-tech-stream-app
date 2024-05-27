import { TransactionBlock } from '@mysten/sui.js/transactions';
import { PACKAGE_ID, SUI_CLIENT } from "./suiClient";
import { AuthService } from "./authService";

// a service to interact with the smart contract using SUI SDK
interface CreateProfile{
    Arg0: string;
    Arg1: string;
    Arg2: string;
    Arg3: string;
}

interface ITips{
    Arg0: string;
    Arg1: string;
}

interface IisFollowing{
    Arg0: string;
    Arg1: string;
}

interface IFollow{
    Arg0: string;
    Arg1: string;
    Arg2: string;
}

interface IUnfollow{
    Arg0: string;
    Arg1: string;
    Arg2: string;
}

interface IWithdrawTip{
    Arg0: string;
    Arg1: string;
    Arg2: string;
}

interface ISetUsername{
    Arg0: string;
    Arg1: string;
    Arg2: string;
}

interface ISetPfp{
    Arg0: string;
    Arg1: string;
    Arg2: string;

}


export class NotesService {

    async create_profile({Arg0, Arg1, Arg2, Arg3}: CreateProfile) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::notes::create_profile`,
            arguments: [
                txb.pure.string(Arg0),
                txb.pure.string(Arg1),
                txb.pure.string(Arg2),
                txb.pure.string(Arg3),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async tip({Arg0, Arg1}: ITips) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::notes::tip`,
            arguments: [
                txb.pure.string(Arg0),
                txb.pure.string(Arg1),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async isFollowing({Arg0, Arg1}: IisFollowing) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::notes::isFollowing`,
            arguments: [
                txb.pure.string(Arg0),
                txb.pure.string(Arg1),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async follow({Arg0, Arg1, Arg2}: IFollow) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::notes::follow`,
            arguments: [
                txb.pure.string(Arg0),
                txb.pure.string(Arg1),
                txb.pure.string(Arg2),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async unfollow({Arg0, Arg1, Arg2}: IUnfollow) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::notes::unfollow`,
            arguments: [
                txb.pure.string(Arg0),
                txb.pure.string(Arg1),
                txb.pure.string(Arg2),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }
    async withdraw_tip({Arg0, Arg1, Arg2}: IWithdrawTip) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::notes::withdraw_tip`,
            arguments: [
                txb.pure.string(Arg0),
                txb.pure.string(Arg1),
                txb.pure.string(Arg2),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

    async set_username({Arg0, Arg1, Arg2}: ISetUsername) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::notes::set_username`,
            arguments: [
                txb.pure.string(Arg0),
                txb.pure.string(Arg1),
                txb.pure.string(Arg2),
            ]
        };
        return this.makeMoveCall(txData, txb);
    }

        async set_pfp({Arg0, Arg1, Arg2}: ISetPfp) {
        const txb = new TransactionBlock();
        const txData = {
            target: `${PACKAGE_ID}::notes::set_pfp`,
            arguments: [
                txb.pure.string(Arg0),
                txb.pure.string(Arg1),
                txb.pure.string(Arg2),
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

    async delete_profile(id: any) {
        const sender = AuthService.walletAddress();
        const txb = new TransactionBlock();
        txb.setSender(sender);
        const txData = {
            target: `${PACKAGE_ID}::notes::delete_profile`,
            arguments: [
                txb.object(id.id),
            ]
        };
        await this.makeMoveCall(txData, txb);
    }

    private async makeMoveCall(txData: any, txb: TransactionBlock) {
        const keypair = AuthService.getEd25519Keypair();
        const sender = AuthService.walletAddress()
        txb.setSender(sender);
        txb.moveCall(txData);
        const { bytes, signature: userSignature } = await txb.sign({
            client: SUI_CLIENT,
            signer: keypair,
        });
        const zkLoginSignature = await AuthService.generateZkLoginSignature(userSignature);
        return SUI_CLIENT.executeTransactionBlock({
            transactionBlock: bytes,
            signature: zkLoginSignature,
        });
    }

    async getSuiMessageCall(txb: TransactionBlock) {
        const keypair = AuthService.getEd25519Keypair();
        const sender = AuthService.walletAddress()
        txb.setSender(sender);
        const { bytes, signature: userSignature } = await txb.sign({
            client: SUI_CLIENT,
            signer: keypair,
        });
        const zkLoginSignature = await AuthService.generateZkLoginSignature(userSignature);
        return { signature: zkLoginSignature };
    }
}


