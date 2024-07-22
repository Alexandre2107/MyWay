export interface Profile {
  profile_id: number
  description: string
}

export interface CreateProfileInput {
  description: string
}

export interface UpdateProfileInput {
  profile_id: number
  description: string
}
