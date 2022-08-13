import { MessagePayload } from "@src/types"

export function instanceOfMessagePayload(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any,
): payload is MessagePayload {
  return "message" in payload
}
