## K8s deploy to AWS EKS
All components are being deployed to EKS cluster and working fine except the EFS, as it is having some issues due to its EFS CSI driver, I checked on local, it is also working fine with minikube

I am using a role githubAccessECRECSRole with required policies to deploy this to EKS and make required changes
I assume the cluster is already created before executing the workflow
