import * as React from "react"


import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Typography } from "@mui/material"
import { cloneDeep, findIndex, set } from "lodash"

import { useMusicResultContext } from "@src/providers"
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
  
  const { musicResult, setMusicResult } = useMusicResultContext()

  const faHeart = isCollected
    ? faHeartSolid
    : faHeartOutline

  function handleClick(): void {
    const newValue = !isCollected
    const newResult = cloneDeep(musicResult)
    const index = findIndex(newResult, (res) => JSON.stringify(res) === JSON.stringify(props))

    set(newResult, `[${index}].isCollected`, newValue)
    setMusicResult(newResult)
  }

  return (
    <Box sx={outerBoxStyles}>
      <img src={cover} style={imageStyles} />
      <Typography sx={titleTextStyles}>{artistAndTitle}</Typography>
      <Typography sx={yearTextStyles}>{year}</Typography>
      <Typography sx={formatTextStyles}>{format.join(", ")}</Typography>
      <Box component={FontAwesomeIcon} icon={faHeart} onClick={handleClick} sx={iconStyles}  />
    </Box>
  )
}
