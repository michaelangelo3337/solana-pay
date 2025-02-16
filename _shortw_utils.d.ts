import { randomBytes } from '@noble/hashes/utils';
import { CHash } from './abstract/utils.js';
import { CurveType, CurveFn } from './abstract/weierstrass.js';
/** connects noble-curves to noble-hashes */
export declare function getHash(hash: CHash): {
    hash: CHash;
    hmac: (key: Uint8Array, ...msgs: Uint8Array[]) => Uint8Array;
    randomBytes: typeof randomBytes;
};
/** Same API as @noble/hashes, with ability to create curve with custom hash */
export type CurveDef = Readonly<Omit<CurveType, 'hash' | 'hmac' | 'randomBytes'>>;
export type CurveFnWithCreate = CurveFn & {
    create: (hash: CHash) => CurveFn;
};
export declare function createCurve(curveDef: CurveDef, defHash: CHash): CurveFnWithCreate;
//# sourceMappingURL=_shortw_utils.d.ts.map