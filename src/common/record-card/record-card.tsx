import * as React from "react"


import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Typography } from "@mui/material"

import { MusicResult } from "@src/types"

import { useStyles } from "./record-card.styles"

type Props = {
  handleCardClick: (music: MusicResult) => void
  result: MusicResult
}

export function RecordCard(props: Props): JSX.Element {
  const { handleCardClick, result } = props
  const { artistAndTitle, cover, format, isCollected, year } = result
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
      <Box component={FontAwesomeIcon} icon={faHeart} onClick={() => handleCardClick(result)} sx={iconStyles}  />
    </Box>
  )
}
