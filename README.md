<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Mon Apr 21 2025 01:35:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47962.4    | 20.36        | 8.55          |
| kita                     | 1.1.36   | ✓      | 46532.8    | 20.98        | 8.34          |
| polka                    | 0.5.2    | ✓      | 46502.4    | 21.00        | 8.29          |
| server-base              | 7.1.32   | ✗      | 46205.6    | 21.11        | 8.24          |
| 0http                    | 3.5.3    | ✓      | 46189.6    | 21.16        | 8.24          |
| polkadot                 | 1.0.0    | ✗      | 46072.0    | 21.21        | 8.22          |
| connect                  | 3.7.0    | ✗      | 45909.6    | 21.25        | 8.19          |
| fastify                  | 4.29.0   | ✓      | 45816.0    | 21.29        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 45746.4    | 21.34        | 8.16          |
| server-base-router       | 7.1.32   | ✓      | 45576.8    | 21.44        | 8.13          |
| connect-router           | 1.3.8    | ✓      | 43734.4    | 22.36        | 7.80          |
| h3-router                | 1.15.1   | ✓      | 42619.2    | 22.96        | 7.60          |
| h3                       | 1.15.1   | ✗      | 42363.2    | 23.10        | 7.56          |
| hono                     | 4.7.7    | ✓      | 40204.0    | 24.35        | 6.59          |
| restana                  | 4.9.9    | ✓      | 40126.4    | 24.43        | 7.16          |
| koa                      | 2.16.1   | ✗      | 36240.6    | 27.09        | 6.46          |
| take-five                | 2.0.0    | ✓      | 35467.0    | 27.69        | 12.75         |
| restify                  | 11.1.0   | ✓      | 34960.2    | 28.10        | 6.30          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34176.0    | 28.76        | 6.09          |
| koa-router               | 12.0.1   | ✓      | 33088.6    | 29.70        | 5.90          |
| hapi                     | 21.4.0   | ✓      | 31926.4    | 30.82        | 5.69          |
| fastify-big-json         | 4.29.0   | ✓      | 11789.2    | 84.26        | 135.64        |
| express                  | 4.21.2   | ✓      | 11146.8    | 89.12        | 1.99          |
| express-with-middlewares | 4.21.2   | ✓      | 10479.6    | 94.83        | 3.90          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
