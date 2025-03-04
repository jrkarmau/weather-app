provider "google" {
  project     = var.project_id
  region      = var.region
  credentials = file(var.gcp_credentials_file) # Fetch from secrets in CI pipeline
}

data "google_client_config" "default" {}

resource "google_container_cluster" "minimal_cluster" {
  name               = "minimal-gke-cluster"
  location           = var.region
  enable_autopilot   = true  # Autopilot mode (Fully managed)
  deletion_protection = false

  # No need to define node pools (Google handles them)
}

# Output cluster info
output "cluster_name" {
  value = google_container_cluster.minimal_cluster.name
}

output "kubeconfig" {
  value = "gcloud container clusters get-credentials ${google_container_cluster.minimal_cluster.name} --region ${var.region}"
}
