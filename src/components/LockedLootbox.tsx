
import { type FC } from "react";

import lootbox from '../assets/lootbox.svg';
import "./lockedlootbox.css"

export const LockedLootbox: FC<{ width: number, height: number }> = (props) => (
    <>
        <div className="ani-body"
            style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
            }}
        >
            <div className="box-pan">
                <div className="boxbody">
                    <img className="lootbox" src={lootbox} alt="" />
                </div>
            </div>
        </div>
    </>
)