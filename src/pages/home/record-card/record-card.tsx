import * as React from "react"

import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Typography } from "@mui/material"

import { MusicResult } from "@src/types"

export function RecordCard(props: MusicResult): JSX.Element {
  const { artistAndTitle, cover, isCollected, format, year } = props
  
  const faHeart = isCollected
    ? faHeartSolid
    : faHeartOutline

  return (
    <Box sx={{ 
      alignItems: "center",
      backgroundColor: "lightblue",
      border: "1px solid black",
      borderRadius: "8px",
      display: "flex",
      gap: "32px",
      m: "12px",
      p: "16px",
    }}>
      <img height="75px" width="75px" src={cover} />
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        justifyContent: "space-between",
        width: "100%",
      }}>
        <Typography sx={{ flex: 1, maxWidth: "500px" }}>{artistAndTitle}</Typography>
        <Typography sx={{ textAlign: "center", width: "50px" }}>{year}</Typography>
        <Typography sx={{ textAlign: "center", width: "200px" }}>{format.join(", ")}</Typography>
        <FontAwesomeIcon icon={faHeart} width="30px" />
      </Box>
    </Box>
  )
}
