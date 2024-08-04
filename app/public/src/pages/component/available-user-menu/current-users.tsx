import React from "react"
import { useTranslation } from "react-i18next"
import { ILobbyUser } from "../../../../../models/colyseus-models/lobby-user"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { searchById } from "../../../stores/NetworkStore"
import { Avatar } from "../profile/avatar"
import "./current-users.css"

export default function CurrentUsers() {
  const { t } = useTranslation()
  const users: ILobbyUser[] = useAppSelector((state) => state.lobby.users)

  return (
    <div className="my-container hidden-scrollable current-users-menu custom-bg">
      <h1>
        {t("online")}: {users.length}
      </h1>
      <ul>
        {users.map((v, i) => (
          <User key={i} v={v} />
        ))}
      </ul>
    </div>
  )
}

function User(props: { key: number; v: ILobbyUser }) {
  const dispatch = useAppDispatch()
  return (
    <li
      className="clickable"
      onClick={() => {
        dispatch(searchById(props.v.id))
      }}
    >
      <Avatar
        avatar={props.v.avatar}
        name={props.v.name}
        elo={props.v.elo}
        title={props.v.title}
        role={props.v.role}
      />
    </li>
  )
}
