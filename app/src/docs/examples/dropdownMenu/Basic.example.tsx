import React, { useState } from 'react';
import { Dropdown, Text } from '@epam/uui-components';
import { Button,
    DropdownMenuBody,
    DropdownMenuButton as MenuItem,
    DropdownMenuSwitchButton as MenuSwitchButton,
    DropdownMenuSplitter,
    DropdownMenuHeader,
    DropdownSubMenu,
    IDropdownMenuItemProps,
    FlexSpacer,
    Badge,
} from '@epam/promo';
import * as icon from '@epam/assets/icons/common/action-eye-18.svg';
import cx from "classnames";
import { uuiMod } from "@epam/uui";

const CustomItem = (props: IDropdownMenuItemProps) => {
    return (
        <div
            className={ cx(
                props.cx,
                props.isDisabled && uuiMod.disabled,
            ) }
            style={ {
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: "0.5em 1em",
                lineHeight: 1.5,
                boxSizing: "border-box",
            } }
        >
            <Text>{ props.caption }</Text>
            <FlexSpacer />
            <Badge color='green' fill='solid' caption='Status' />
        </div>
    );
};

const DropdownMenuButton = (props: any) => {
    const [selected, setSelected] = useState(false);

    const handleCLick = (event: React.SyntheticEvent<any, any>) => {
        setSelected(!selected);
    };

    return (
        <MenuItem
            { ...props }
            onClick={ handleCLick }
            isSelected={ selected }
        />
    );
};

const DropdownMenuSwitchButton = (props: any) => {
    const [selected, setSelected] = useState(false);

    const handleValueChange = (value: boolean) => {
        setSelected(value);
    };

    return (
        <MenuSwitchButton
            { ...props }
            onValueChange={ handleValueChange }
            isSelected={ selected }
        />
    );
};

export default function BasicDropdownMenuExample() {

    const renderDropdownBody = () => {

        const clickAnalyticsEvent = {
            name: "DropdownMenu Item click",
            category: "docs",
            label: "static_event",
        };

        return (
            <DropdownMenuBody style={ { maxWidth: "250px" } } >
                <DropdownMenuButton
                    icon={ icon }
                    caption="Menu Item with extra link"
                    href="https://www.epam.com/"
                    clickAnalyticsEvent={ clickAnalyticsEvent }
                />
                <DropdownMenuButton
                    caption="Disabled Menu Item"
                    isDisabled={ true }
                />
                <DropdownSubMenu
                    caption="Menu Item with SubMenu"
                    >
                    <DropdownMenuButton
                        caption="Menu Item in Submenu"
                    />
                    <DropdownMenuButton
                        caption="Menu Item in Submenu"
                    />
                    <DropdownMenuButton
                        caption="Menu Item in Submenu"
                    />
                    <DropdownMenuButton
                        icon={ icon }
                        caption="Menu Item in Submenu with icon"
                    />
                    <DropdownSubMenu
                        caption="One More SubMenu"
                    >
                        <DropdownMenuButton
                            icon={ icon }
                            iconPosition="right"
                            caption="Menu Item with icon in right"
                        />
                    </DropdownSubMenu>
                    <DropdownMenuButton
                        icon={ icon }
                        caption="Menu Item in Submenu"
                    />
                </DropdownSubMenu>
                <DropdownMenuSplitter />
                <DropdownMenuButton
                    icon={ icon }
                    caption="Click to select it"
                />
                <DropdownMenuButton
                    icon={ icon }
                    caption="Menu Item"
                />
                <DropdownMenuSwitchButton
                    caption="Menu Item with switch"
                />
                <DropdownMenuButton
                    icon={ icon }
                    caption="Menu Item with very long long long long long long long long caption"
                />
                <DropdownMenuSplitter />
                <DropdownMenuHeader
                    caption="An example of DropdownMenuHeader"
                />
                <DropdownMenuButton
                    icon={ icon }
                    iconPosition="right"
                    caption="Menu Item2"
                />
                <DropdownMenuSplitter />
                <DropdownMenuButton
                    caption="A"
                />
                <DropdownMenuButton
                    caption="B"
                />
                <DropdownMenuButton
                    caption="C"
                />
                <DropdownMenuSplitter />
                <CustomItem caption="Custom menu item"/>
            </DropdownMenuBody>
        );
    };

    return (
        <>
            <Dropdown
                renderBody={ () => renderDropdownBody() }
                renderTarget={ (props) => <Button caption='Click to open' { ...props } /> }
            />
        </>
    );
}