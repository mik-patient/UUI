import React from "react";
import * as colors from '../../assets/styles/colorvars/inputs/switch-colorvars.scss';
import * as css from './Switch.scss';
import { Switch as uuiSwitch, SwitchProps } from '@epam/uui-components';
import { withMods } from '@epam/uui';

export interface SwitchMods {
    size?: '12' | '18' | '24';
}

export function applySwitchMods(mods: SwitchMods & SwitchProps) {
    return [
        colors.switchColors,
        css.root,
        css['size-' + (mods.size || '18')],
    ];
}

export const Switch = withMods<SwitchProps, SwitchMods>(uuiSwitch, applySwitchMods);
