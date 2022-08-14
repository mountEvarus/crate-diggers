import * as React from "react"

import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Typography } from "@mui/material"

import { MusicResult } from "@src/types"

import { useStyles } from "./record-card.styles"

export function RecordCard(props: MusicResult): JSX.Element {
  const { artistAndTitle, cover, isCollected, format, year } = props
  const { 
    formatTextStyles,
    iconStyles,
    imageStyles,
    outerBoxStyles,
    titleTextStyles,
    yearTextStyles,
  } = useStyles()
  
  const faHeart = isCollected
    ? faHeartSolid
    : faHeartOutline

  return (
    <Box sx={outerBoxStyles}>
      <img src={cover} style={imageStyles} />
      <Typography sx={titleTextStyles}>{artistAndTitle}</Typography>
      <Typography sx={yearTextStyles}>{year}</Typography>
      <Typography sx={formatTextStyles}>{format.join(", ")}</Typography>
      <FontAwesomeIcon icon={faHeart} style={iconStyles}  />
    </Box>
  )
}
