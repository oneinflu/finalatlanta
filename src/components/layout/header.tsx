import type { ComponentProps } from "react";
import { Header as MarketingHeader } from "@/components/marketing/header-navigation/header";

export type LayoutHeaderProps = ComponentProps<typeof MarketingHeader>;

const defaultItems = [
    { label: "Academy", href: "/" },
    { label: "SOC Roles", href: "/roles" },
    { label: "Programs", href: "/programs" },
    { label: "Threat Landscape", href: "/threat" },
    { label: "About", href: "/about" },
];

export const Header = ({ isFullWidth = true, items, className, ...props }: LayoutHeaderProps) => {
    const simpleItems = items ?? defaultItems;
    return (
        <MarketingHeader
            isFullWidth={isFullWidth}
            isFloating
            className={`fixed inset-x-0 top-0 z-50 bg-transparent md:bg-transparent md:ring-0 md:shadow-none ${className ?? ""}`}
            items={simpleItems}
            {...props}
        />
    );
};

export default Header;
