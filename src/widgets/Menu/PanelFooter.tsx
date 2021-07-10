import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, CogIcon, SvgProps, LogoLive } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

let BobaValue = "0.00";
let LiveValue = "0.00";

fetch("https://api.dex.guru/v1/tokens/0x5481a517028813956005d77bcd0f561c7276b1e3")
  .then((res) => res.json())
  .then(
    (result) => {
      const bobaValues = (result.priceUSD * 1000000000).toFixed(3).toString();
      BobaValue = bobaValues;
    },
    (error) => {
      BobaValue = "0.00";
    }
  )
  .catch(() => {
    BobaValue = "0.00";
  });

fetch("https://api.dex.guru/v1/tokens/0x45EeDF18492b6eEe6Ba99d578D0De16ca3bD8967")
  .then((res) => res.json())
  .then(
    (result) => {
      const liveValue = result.priceUSD.toFixed(2).toString();
      LiveValue = liveValue;
    },
    (error) => {
      LiveValue = "0.00";
    }
  )
  .catch(() => {
    LiveValue = "0.00";
  });

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        {BobaValue ? (
          <PriceLink href={priceLink} target="_blank">
            <PancakeRoundIcon width="24px" mr="8px" />
            <Text color="textSubtle" bold>
              1B/{`$${BobaValue}`}
            </Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}

        {LiveValue ? (
          <PriceLink href="https://poocoin.app/tokens/0x45eedf18492b6eee6ba99d578d0de16ca3bd8967" target="_blank">
            <LogoLive width="24px" mr="8px" />
            <Text color="textSubtle" bold>
              {`$${LiveValue}`}
            </Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
      </SocialEntry>

      <SettingsEntry>
        <Button variant="text" onClick={() => toggleTheme(!isDark)}>
          {/* alignItems center is a Safari fix */}
          <Flex alignItems="center">
            <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
            <Text color="textDisabled" mx="4px">
              /
            </Text>
            <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
          </Flex>
        </Button>

        {/*  <Dropdown
          position="top-right"
          target={
            <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
              <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown> */}

        <Flex>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "8px" : 0;
            if (social.items) {
              return (
                <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
