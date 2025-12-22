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
* __Node:__ `v20.19.6`
* __Run:__ Mon Dec 22 2025 01:41:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 53788.8    | 18.08        | 9.59          |
| bare                     | v20.19.6 | ✗      | 47618.4    | 20.52        | 8.49          |
| polka                    | 0.5.2    | ✓      | 47361.6    | 20.62        | 8.45          |
| kita                     | 1.1.36   | ✓      | 46916.0    | 20.81        | 8.41          |
| fastify                  | 4.29.1   | ✓      | 46609.6    | 20.95        | 8.36          |
| connect                  | 3.7.0    | ✗      | 46477.8    | 21.01        | 8.29          |
| server-base              | 7.1.32   | ✗      | 45256.8    | 21.63        | 8.07          |
| server-base-router       | 7.1.32   | ✓      | 45051.2    | 21.74        | 8.03          |
| h3                       | 1.15.4   | ✗      | 44980.8    | 21.74        | 8.02          |
| rayo                     | 1.4.6    | ✓      | 44955.2    | 21.76        | 8.02          |
| 0http                    | 3.5.3    | ✓      | 44046.4    | 22.21        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 44046.4    | 22.18        | 7.85          |
| h3-router                | 1.15.4   | ✓      | 43373.6    | 22.56        | 7.74          |
| restana                  | 4.9.9    | ✓      | 38098.4    | 25.75        | 6.79          |
| koa                      | 2.16.3   | ✗      | 37375.0    | 26.26        | 6.67          |
| hono                     | 4.11.1   | ✓      | 36907.2    | 26.61        | 6.05          |
| take-five                | 2.0.0    | ✓      | 35637.4    | 27.54        | 12.81         |
| restify                  | 11.1.0   | ✓      | 35129.4    | 27.96        | 6.33          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35008.6    | 28.06        | 6.24          |
| koa-router               | 12.0.1   | ✓      | 33575.0    | 29.30        | 5.99          |
| hapi                     | 21.4.4   | ✓      | 32031.0    | 30.71        | 5.71          |
| fastify-big-json         | 4.29.1   | ✓      | 11857.8    | 83.77        | 136.43        |
| express                  | 4.22.1   | ✓      | 11149.4    | 89.13        | 1.99          |
| express-with-middlewares | 4.22.1   | ✓      | 10414.2    | 95.43        | 3.87          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.3  | ✓      | N/A        | N/A          | N/A           |
