## K8s deploye to AWS EKS
all components are being deployed to EKS cluster and working fine except the EFS, as it is having some issues due to its EFS CSI driver, I checked on local, it is also working fine with minikube

I am using a role githubAccessECRECSRole with required policies to deploy this to EKS and make required changes
