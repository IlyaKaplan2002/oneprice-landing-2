import classNames from "classnames";
import { Wrapper } from "./mobileSidebar.styled";
import { Box } from "@mui/material";
import { useCallback } from "react";
import { scrollTo } from "../../helpers";
import { unlock } from "tua-body-scroll-lock";

const MobileSidebar = ({ open, setOpen, openForm }) => {
  const navigate = useCallback(
    (to) => {
      unlock(document.getElementById("modal") || undefined);
      scrollTo(to);
      setOpen(false);
    },
    [setOpen]
  );

  return (
    <Wrapper className={classNames({ open })}>
      <Box className="container">
        <Box component="ul" className="sidebarList">
          <Box component="li" onClick={() => navigate("about")}>
            <Box component="p">ПРО НАС</Box>
            <Box className="sidebarDivider" />
          </Box>

          <Box component="li" onClick={() => navigate("videoMobile")}>
            <Box component="p">ВІДЕО</Box>
            <Box className="sidebarDivider" />
          </Box>

          <Box component="li" onClick={() => navigate("partner")}>
            <Box component="p">ФРАНШИЗА</Box>
            <Box className="sidebarDivider" />
          </Box>
        </Box>

        <Box
          component="button"
          className="sidebarButton c-fw-600 hover"
          onClick={() => navigate("contact")}
        >
          ЗВ`ЯЗАТИСЬ
        </Box>
      </Box>
    </Wrapper>
  );
};

export default MobileSidebar;
