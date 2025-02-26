variable "project_id" {
  description = "Google Cloud Project ID"
  type        = string
}

variable "region" {
  description = "GCP region for the cluster"
  type        = string
  default     = "europe-north1"
}

variable "gcp_credentials_file" {
  description = "Path to the GCP service account credentials JSON file"
  type        = string
}
